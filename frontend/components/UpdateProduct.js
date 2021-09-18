import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { useEffect } from "react";

import classesForm from "../styles/Form.module.scss";
import DisplayError from "./ErrorMessage";

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: String
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

//###############################################################
//###############################################################
//###############################################################
//###############################################################

export default function UpdateProduct({ id }) {
  //================================
  //=========   HOOKS   ============
  //================================

  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(SINGLE_PRODUCT_QUERY, { variables: { id } });

  const [
    updateProduct,
    { loading: updateLoading, error: updateError, data: updateData },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  const {
    register,
    handleSubmit,
    formState: { errors: formError },
    reset,
  } = useForm();

  //===================================
  //========   USE EFFECTS   ==========
  //===================================

  //-- SET: form default values |
  //-- USING: `reset` (react-hook-form's) and `useEffect`
  //-- (since default values coming async)
  useEffect(() => {
    reset(queryData?.Product);
  }, [queryData]);

  //===================================
  //=========    HANDLERS    ==========
  //===================================

  const onSubmitHandler = async (formData) => {
    const res = await updateProduct({
      variables: { id, ...formData },
    });
    Router.push({ pathname: `/product/${res.data.updateProduct.id}` });
  };

  //===================================
  //=========   RETURN   ==============
  //===================================

  if (queryLoading) return <p>Loading...</p>;
  if (queryError) return <DisplayError error={queryError} />;

  return (
    <form className={classesForm.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <DisplayError error={queryError || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label>
          Name
          <input
            // defaultValue={queryData.Product.name}
            {...register("name", { required: true })}
          />
          {formError.name && <span>This field is required</span>}
        </label>
        <label>
          Description
          <textarea
            // defaultValue={queryData.Product.description}
            {...register("description", { required: true })}
          />
          {formError.description && <span>This field is required</span>}
        </label>
        <label>
          Price
          <input
            // defaultValue={queryData.Product.price}
            type="number"
            {...register("price", { required: true })}
          />
          {formError.number && <span>This field is required</span>}
        </label>
        <button type="submit">Update</button>
      </fieldset>
    </form>
  );
}

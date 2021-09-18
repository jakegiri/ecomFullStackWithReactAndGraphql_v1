import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useForm } from "react-hook-form";
import Router from "next/router";

import classesForm from "../styles/Form.module.scss";
import DisplayError from "./ErrorMessage";

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: String!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const useMutationUpdateFunction = (cache, { data: { createProduct } }) => {
  cache.modify({
    fields: {
      allProducts(existingAddProducts = []) {
        const newAddProductsRef = cache.writeFragment({
          data: createProduct,
          fragment: gql`
            fragment NewProduct on Product {
              id
              name
              price
              description
              photo
            }
          `,
        });
        return [...existingAddProducts, newAddProductsRef];
      },
    },
  });
};

//##################################################
//##################################################
//##################################################
//##################################################

export default function CreateProduct() {
  //HOOK - useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formError },
  } = useForm();

  //HOOK - useMutation
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      update: useMutationUpdateFunction,
    }
  );

  const onSubmitHandler = async (formData) => {
    const requiredFormData = { ...formData, image: formData.image[0] };
    const res = await createProduct({
      variables: requiredFormData,
    });
    Router.push({
      pathname: `/product/${res.data.createProduct.id}`,
    });
  };

  return (
    <form className={classesForm.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label>
          Name
          <input {...register("name", { required: true })} />
          {formError.name && <span>This field is required</span>}
        </label>
        <label>
          Description
          <textarea {...register("description", { required: true })} />
          {formError.description && <span>This field is required</span>}
        </label>
        <label>
          Price
          <input type="number" {...register("price", { required: true })} />
          {formError.number && <span>This field is required</span>}
        </label>
        <label>
          Image
          <input type="file" {...register("image")} />
        </label>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <button
          type="button"
          onClick={() => reset({ name: "Jake Giri", price: 999999 })}
        >
          ResetWithDefaultValues
        </button>
      </fieldset>
    </form>
  );
}

(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartCount; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Dot_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Dot.module.scss */ "./styles/Dot.module.scss");
/* harmony import */ var _styles_Dot_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Dot_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Work\\coding\\vscode_workspaces\\practice\\wesbosKeystone1\\frontend\\components\\CartCount.js";


function CartCount({
  count
}) {
  // if (!count) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    className: (_styles_Dot_module_scss__WEBPACK_IMPORTED_MODULE_2___default().root),
    animate: {
      scale: [1, 2, 1]
    },
    transition: {
      type: "tween",
      duration: 0.3
    },
    children: count
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_context_cartState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/context/cartState */ "./lib/context/cartState.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _lib_hooks_User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/hooks/User */ "./lib/hooks/User.js");
/* harmony import */ var _styles_CheckoutForm_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/CheckoutForm.module.scss */ "./styles/CheckoutForm.module.scss");
/* harmony import */ var _styles_CheckoutForm_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_CheckoutForm_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_SickButton_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/SickButton.module.scss */ "./styles/SickButton.module.scss");
/* harmony import */ var _styles_SickButton_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_SickButton_module_scss__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "D:\\Work\\coding\\vscode_workspaces\\practice\\wesbosKeystone1\\frontend\\components\\Checkout.js";












const CREATE_ORDER_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_5___default())`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
const stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__.loadStripe)("pk_test_51Hr93AH9CXa8bOfkOpzVLsasmU6tL6sSYDIkB9YfP6RATUMoj898yq2snUZaEEAl9NZ8a94AtsIoE46GAY1kRapK004jLbkVCM"); //#####################################################
//#####################################################
//          COMPONENT
//#####################################################
//#####################################################

function CheckoutForm() {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    closeCart
  } = (0,_lib_context_cartState__WEBPACK_IMPORTED_MODULE_8__.useCart)();
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useElements)();
  const [checkout, {
    error: graphqlError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: _lib_hooks_User__WEBPACK_IMPORTED_MODULE_10__.CURRENT_USER_QUERY
    }]
  }); //=============================================
  //    EVENT HANDLERS
  //=============================================

  const onSubmitHandler = async e => {
    // 1. Stop the form from submitting and turn the loader on
    e.preventDefault();
    setLoading(true); // 2. Start the page transition

    nprogress__WEBPACK_IMPORTED_MODULE_6___default().start(); // 3. Create the payment method via stripe (Token comes back here if successful)

    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement)
    }); // 4. Handle any errors from stripe

    if (error) {
      setError(error);
      nprogress__WEBPACK_IMPORTED_MODULE_6___default().done();
      return;
    } // 5. Send the token from step 3 to our keystone server, via a custom mutation!


    const order = await checkout({
      variables: {
        token: paymentMethod.id
      }
    }); // 6. Change the page to view the order

    router.push({
      pathname: "/order/[id]",
      query: {
        id: order.data.checkout.id
      }
    }); // 7. Close the cart

    closeCart(); // 8. Turn the loader off

    setLoading(false);
    nprogress__WEBPACK_IMPORTED_MODULE_6___default().done();
  }; //======================================
  //             RETURN
  //======================================


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: (_styles_CheckoutForm_module_scss__WEBPACK_IMPORTED_MODULE_11___default().root),
    onSubmit: onSubmitHandler,
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      className: (_styles_SickButton_module_scss__WEBPACK_IMPORTED_MODULE_12___default().root),
      children: "Checkout Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 5
  }, this);
} //#####################################################
//#####################################################
//          COMPONENT
//#####################################################
//#####################################################


function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.Elements, {
    stripe: stripePromise,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/DeleteCartItem.js":
/*!**************************************!*\
  !*** ./components/DeleteCartItem.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeleteCartItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_DeleteCartItem_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/DeleteCartItem.module.scss */ "./styles/DeleteCartItem.module.scss");
/* harmony import */ var _styles_DeleteCartItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_DeleteCartItem_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Work\\coding\\vscode_workspaces\\practice\\wesbosKeystone1\\frontend\\components\\DeleteCartItem.js";




const DELETE_CART_ITEM_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation DELETE_CART_ITEM($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

const updateCacheFunction = (cache, {
  data
}) => {
  cache.evict(cache.identify(data.deleteCartItem));
};

function DeleteCartItem({
  id
}) {
  const [deleteCartItem, {
    loading,
    error,
    data
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_CART_ITEM_MUTATION, {
    variables: {
      id: id
    },
    update: updateCacheFunction
  });
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__.default, {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    disabled: loading,
    type: "button",
    onClick: deleteCartItem,
    className: (_styles_DeleteCartItem_module_scss__WEBPACK_IMPORTED_MODULE_4___default().root),
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.module.css */ "./components/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart */ "./components/cart.js");

var _jsxFileName = "D:\\Work\\coding\\vscode_workspaces\\practice\\wesbosKeystone1\\frontend\\components\\Header.js";




function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().anchor1),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),
            children: "Sick Fits"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default()["sub-bar"]),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cart__WEBPACK_IMPORTED_MODULE_3__.default, {
      open: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.css */ "./components/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Work\\coding\\vscode_workspaces\\practice\\wesbosKeystone1\\frontend\\components\\Layout.js";


function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().innerStyles),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hooks/User */ "./lib/hooks/User.js");
/* harmony import */ var _lib_context_cartState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/context/cartState */ "./lib/context/cartState.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");
/* harmony import */ var _styles_NavStyles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/NavStyles.module.css */ "./styles/NavStyles.module.css");
/* harmony import */ var _styles_NavStyles_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_NavStyles_module_css__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\Work\\coding\\vscode_workspaces\\practice\\wesbosKeystone1\\frontend\\components\\Nav.js";







function Nav() {
  const user = (0,_lib_hooks_User__WEBPACK_IMPORTED_MODULE_3__.useUser)();
  const {
    openCart
  } = (0,_lib_context_cartState__WEBPACK_IMPORTED_MODULE_4__.useCart)();
  const nosCartItems = user && user.cart.reduce((tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0), 0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: (_styles_NavStyles_module_css__WEBPACK_IMPORTED_MODULE_7___default().nav),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/products",
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/sell",
        children: "Sell"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/orders",
        children: "Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/account",
        children: "Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: openCart,
        children: ["My Cart", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartCount__WEBPACK_IMPORTED_MODULE_6__.default, {
          count: nosCartItems
        }, nosCartItems, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignOut__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, this)]
    }, void 0, true), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/signIn",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/signUp",
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/requestResetForgetPassword",
        children: "Forget Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOut; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hooks/User */ "./lib/hooks/User.js");

var _jsxFileName = "D:\\Work\\coding\\vscode_workspaces\\practice\\wesbosKeystone1\\frontend\\components\\SignOut.js";



const SIGNOUT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(SIGNOUT_MUTATION, {
    refetchQueries: [{
      query: _lib_hooks_User__WEBPACK_IMPORTED_MODULE_3__.CURRENT_USER_QUERY
    }]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    onClick: signout,
    children: "Sign Out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/cart.js":
/*!****************************!*\
  !*** ./components/cart.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/hooks/User */ "./lib/hooks/User.js");
/* harmony import */ var _lib_context_cartState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/context/cartState */ "./lib/context/cartState.js");
/* harmony import */ var _lib_util_formatMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/util/formatMoney */ "./lib/util/formatMoney.js");
/* harmony import */ var _lib_util_calcTotalPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/util/calcTotalPrice */ "./lib/util/calcTotalPrice.js");
/* harmony import */ var _DeleteCartItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteCartItem */ "./components/DeleteCartItem.js");
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Checkout */ "./components/Checkout.js");
/* harmony import */ var _styles_CartStyles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/CartStyles.module.scss */ "./styles/CartStyles.module.scss");
/* harmony import */ var _styles_CartStyles_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_CartStyles_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Supreme_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Supreme.module.scss */ "./styles/Supreme.module.scss");
/* harmony import */ var _styles_Supreme_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Supreme_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/CartItem.module.scss */ "./styles/CartItem.module.scss");
/* harmony import */ var _styles_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_CloseButton_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/CloseButton.module.scss */ "./styles/CloseButton.module.scss");
/* harmony import */ var _styles_CloseButton_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_CloseButton_module_scss__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "D:\\Work\\coding\\vscode_workspaces\\practice\\wesbosKeystone1\\frontend\\components\\cart.js";









 //##################################################
//              CART ITEM
//##################################################

function CartItem({
  cartItem
}) {
  const {
    product
  } = cartItem;
  if (!product) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_CartItem_module_scss__WEBPACK_IMPORTED_MODULE_7___default().root),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      width: "100",
      src: product.photo.image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Price: ", product.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Quantity: ", cartItem.quantity]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Total Price: ", (0,_lib_util_formatMoney__WEBPACK_IMPORTED_MODULE_3__.default)(product.price * cartItem.quantity)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteCartItem__WEBPACK_IMPORTED_MODULE_5__.default, {
      id: cartItem.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
} //##################################################
//              CART
//##################################################


function Cart() {
  const me = (0,_lib_hooks_User__WEBPACK_IMPORTED_MODULE_1__.useUser)();
  const {
    cartIsOpen,
    closeCart
  } = (0,_lib_context_cartState__WEBPACK_IMPORTED_MODULE_2__.useCart)();
  if (!me) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 19
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_styles_CartStyles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().root)} ${cartIsOpen && (_styles_CartStyles_module_scss__WEBPACK_IMPORTED_MODULE_8___default().open)}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Supreme_module_scss__WEBPACK_IMPORTED_MODULE_9___default().root),
        children: [me.name, "'s Cart"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_styles_CloseButton_module_scss__WEBPACK_IMPORTED_MODULE_10___default().root),
        onClick: closeCart,
        children: [" ", "Close", " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: [!me.cart.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "There is no item in your cart!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 29
      }, this), me.cart.map(cartItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
        cartItem: cartItem
      }, cartItem.id, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: (0,_lib_util_formatMoney__WEBPACK_IMPORTED_MODULE_3__.default)((0,_lib_util_calcTotalPrice__WEBPACK_IMPORTED_MODULE_4__.default)(me.cart))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Checkout__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./lib/apollo/apolloClient.js":
/*!************************************!*\
  !*** ./lib/apollo/apolloClient.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APOLLO_STATE_PROP_NAME": function() { return /* binding */ APOLLO_STATE_PROP_NAME; },
/* harmony export */   "initializeApollo": function() { return /* binding */ initializeApollo; },
/* harmony export */   "addApolloState": function() { return /* binding */ addApolloState; },
/* harmony export */   "useApollo": function() { return /* binding */ useApollo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/error */ "@apollo/client/link/error");
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ "deepmerge");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _paginationField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginationField */ "./lib/apollo/paginationField.js");






 //#########################################
//#########################################
//#########################################

const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";
let apolloClient;

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
    ssrMode: true,
    link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.from)([(0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.map(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }), (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_5__.createUploadLink)({
      uri: "http://localhost:3000/api/graphql",
      // Server URL (must be absolute)
      credentials: "include" // Additional fetch() options like `credentials` or `headers`

    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allProducts: (0,_paginationField__WEBPACK_IMPORTED_MODULE_6__.default)()
          }
        }
      }
    })
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); //=======================================
  //    IF INITIAL STATE IS AVAILABLE
  //=======================================
  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // Merge the existing cache into data passed from getStaticProps/getServerSideProps


    const data = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [...sourceArray, ...destinationArray.filter(d => sourceArray.every(s => !lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(d, s)))]
    }); // Restore the cache with the merged data

    _apolloClient.cache.restore(data);
  } //========================================
  //      SERVER SIDE RENDERING
  //========================================
  // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; //=========================================
  //     CLIENT SIDE RENDERING
  //=========================================
  // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function addApolloState(client, {
  props
}) {
  if (props) {
    props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}
function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeApollo(state), [state]);
  return store;
}

/***/ }),

/***/ "./lib/apollo/paginationField.js":
/*!***************************************!*\
  !*** ./lib/apollo/paginationField.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
function paginationField() {
  return {
    keyArgs: false,

    read(existing, {
      args: {
        skip,
        first
      }
    }) {
      if (!existing) return false;
      const requiredItem = existing.slice(skip, skip + first).filter(x => x);
      return !!requiredItem.length && requiredItem;
    },

    merge(existing = [], incoming, {
      args: {
        skip = 0
      }
    }) {
      const merged = [...existing];

      for (let i = 0; i < incoming.length; ++i) {
        merged[skip + i] = incoming[i];
      }

      return merged;
    }

  };
}

/***/ }),

/***/ "./lib/util/calcTotalPrice.js":
/*!************************************!*\
  !*** ./lib/util/calcTotalPrice.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ calcTotalPrice; }
/* harmony export */ });
function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; // products can be deleted, but they could still be in your cart

    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _lib_apollo_apolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/apollo/apolloClient */ "./lib/apollo/apolloClient.js");
/* harmony import */ var _lib_context_cartState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/context/cartState */ "./lib/context/cartState.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/nprogress.css */ "./styles/nprogress.css");
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "D:\\Work\\coding\\vscode_workspaces\\practice\\wesbosKeystone1\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeStart", () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().start());
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeComplete", () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on("routeChangeError", () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());

function MyApp({
  Component,
  pageProps
}) {
  const apolloClient = (0,_lib_apollo_apolloClient__WEBPACK_IMPORTED_MODULE_5__.useApollo)(pageProps);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {
    client: apolloClient,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_context_cartState__WEBPACK_IMPORTED_MODULE_6__.CartProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./components/Header.module.css":
/*!**************************************!*\
  !*** ./components/Header.module.css ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"bar": "Header_bar__TSU4U",
	"sub-bar": "Header_sub-bar__3ZepS",
	"logo": "Header_logo__3AsrB",
	"anchor1": "Header_anchor1__2L72j"
};


/***/ }),

/***/ "./components/Layout.module.css":
/*!**************************************!*\
  !*** ./components/Layout.module.css ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"innerStyles": "Layout_innerStyles__mRiDA"
};


/***/ }),

/***/ "./styles/NavStyles.module.css":
/*!*************************************!*\
  !*** ./styles/NavStyles.module.css ***!
  \*************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"nav": "NavStyles_nav__2RhXZ"
};


/***/ }),

/***/ "./styles/CartItem.module.scss":
/*!*************************************!*\
  !*** ./styles/CartItem.module.scss ***!
  \*************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"root": "CartItem_root__1E7qV"
};


/***/ }),

/***/ "./styles/CartStyles.module.scss":
/*!***************************************!*\
  !*** ./styles/CartStyles.module.scss ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"root": "CartStyles_root__3PVJn",
	"open": "CartStyles_open__3woq8"
};


/***/ }),

/***/ "./styles/CheckoutForm.module.scss":
/*!*****************************************!*\
  !*** ./styles/CheckoutForm.module.scss ***!
  \*****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"root": "CheckoutForm_root__3Cq7b"
};


/***/ }),

/***/ "./styles/CloseButton.module.scss":
/*!****************************************!*\
  !*** ./styles/CloseButton.module.scss ***!
  \****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"root": "CloseButton_root__116Y3"
};


/***/ }),

/***/ "./styles/DeleteCartItem.module.scss":
/*!*******************************************!*\
  !*** ./styles/DeleteCartItem.module.scss ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"root": "DeleteCartItem_root__309_W"
};


/***/ }),

/***/ "./styles/Dot.module.scss":
/*!********************************!*\
  !*** ./styles/Dot.module.scss ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Dot_root__1nV7h"
};


/***/ }),

/***/ "./styles/SickButton.module.scss":
/*!***************************************!*\
  !*** ./styles/SickButton.module.scss ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"root": "SickButton_root__VkxDH"
};


/***/ }),

/***/ "./styles/Supreme.module.scss":
/*!************************************!*\
  !*** ./styles/Supreme.module.scss ***!
  \************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"root": "Supreme_root__1zU4z"
};


/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "./styles/nprogress.css":
/*!******************************!*\
  !*** ./styles/nprogress.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/link/error");;

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/react-stripe-js");;

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-upload-client");;

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("deepmerge");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash/isEqual");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js-lib_context_cartState_js-lib_hooks_User_js-lib_util_formatMoney_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NhcnRDb3VudC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NoZWNrb3V0LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvRGVsZXRlQ2FydEl0ZW0uanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9TaWduT3V0LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvY2FydC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvYXBvbGxvL2Fwb2xsb0NsaWVudC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvYXBvbGxvL3BhZ2luYXRpb25GaWVsZC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvdXRpbC9jYWxjVG90YWxQcmljZS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9MYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9zdHlsZXMvTmF2U3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vc3R5bGVzL0NhcnRJdGVtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3N0eWxlcy9DYXJ0U3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3N0eWxlcy9DaGVja291dEZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vc3R5bGVzL0Nsb3NlQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3N0eWxlcy9EZWxldGVDYXJ0SXRlbS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9zdHlsZXMvRG90Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3N0eWxlcy9TaWNrQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3N0eWxlcy9TdXByZW1lLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImRlZXBtZXJnZVwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImxvZGFzaC9pc0VxdWFsXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDYXJ0Q291bnQiLCJjb3VudCIsInN0eWxlc0RvdCIsInNjYWxlIiwidHlwZSIsImR1cmF0aW9uIiwiQ1JFQVRFX09SREVSX01VVEFUSU9OIiwiZ3FsIiwic3RyaXBlUHJvbWlzZSIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiQ2hlY2tvdXRGb3JtIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjbG9zZUNhcnQiLCJ1c2VDYXJ0Iiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImNoZWNrb3V0IiwiZ3JhcGhxbEVycm9yIiwidXNlTXV0YXRpb24iLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwib25TdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiblByb2dyZXNzIiwicGF5bWVudE1ldGhvZCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50Iiwib3JkZXIiLCJ2YXJpYWJsZXMiLCJ0b2tlbiIsImlkIiwicHVzaCIsInBhdGhuYW1lIiwiZGF0YSIsInN0eWxlc0NoZWNrb3V0Rm9ybSIsInN0eWxlc1NpY2tCdXR0b24iLCJDaGVja291dCIsIkRFTEVURV9DQVJUX0lURU1fTVVUQVRJT04iLCJ1cGRhdGVDYWNoZUZ1bmN0aW9uIiwiY2FjaGUiLCJldmljdCIsImlkZW50aWZ5IiwiZGVsZXRlQ2FydEl0ZW0iLCJEZWxldGVDYXJ0SXRlbSIsInVwZGF0ZSIsInN0eWxlc0RlbGV0ZUNhcnRJdGVtIiwiSGVhZGVyIiwiY2xhc3Nlc0hlYWRlciIsIkxheW91dCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsIk5hdiIsInVzZXIiLCJ1c2VVc2VyIiwib3BlbkNhcnQiLCJub3NDYXJ0SXRlbXMiLCJjYXJ0IiwicmVkdWNlIiwidGFsbHkiLCJjYXJ0SXRlbSIsInByb2R1Y3QiLCJxdWFudGl0eSIsImNsYXNzZXNOYXYiLCJTSUdOT1VUX01VVEFUSU9OIiwiU2lnbk91dCIsInNpZ25vdXQiLCJDYXJ0SXRlbSIsInN0eWxlc0NhcnRJdGVtIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsInByaWNlIiwiZm9ybWF0TW9uZXkiLCJDYXJ0IiwibWUiLCJjYXJ0SXNPcGVuIiwic3R5bGVzQ2FydCIsInN0eWxlc1N1cHJlbWUiLCJzdHlsZXNDbG9zZUJ1dHRvbiIsImxlbmd0aCIsIm1hcCIsImNhbGNUb3RhbFByaWNlIiwiQVBPTExPX1NUQVRFX1BST1BfTkFNRSIsImFwb2xsb0NsaWVudCIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiZnJvbSIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwibWVzc2FnZSIsImxvY2F0aW9ucyIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlVXBsb2FkTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiYWxsUHJvZHVjdHMiLCJwYWdpbmF0aW9uRmllbGQiLCJpbml0aWFsaXplQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImV4aXN0aW5nQ2FjaGUiLCJleHRyYWN0IiwibWVyZ2UiLCJhcnJheU1lcmdlIiwiZGVzdGluYXRpb25BcnJheSIsInNvdXJjZUFycmF5IiwiZmlsdGVyIiwiZCIsImV2ZXJ5IiwicyIsImlzRXF1YWwiLCJyZXN0b3JlIiwiYWRkQXBvbGxvU3RhdGUiLCJjbGllbnQiLCJwcm9wcyIsInBhZ2VQcm9wcyIsInVzZUFwb2xsbyIsInN0YXRlIiwic3RvcmUiLCJ1c2VNZW1vIiwia2V5QXJncyIsInJlYWQiLCJleGlzdGluZyIsImFyZ3MiLCJza2lwIiwiZmlyc3QiLCJyZXF1aXJlZEl0ZW0iLCJzbGljZSIsIngiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiLCJSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJNeUFwcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxTQUFULENBQW1CO0FBQUVDO0FBQUYsQ0FBbkIsRUFBOEI7QUFDM0M7QUFFQSxzQkFDRSw4REFBQyxxREFBRDtBQUNFLGFBQVMsRUFBRUMscUVBRGI7QUFFRSxXQUFPLEVBQUU7QUFBRUMsV0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQVQsS0FGWDtBQUdFLGNBQVUsRUFBRTtBQUFFQyxVQUFJLEVBQUUsT0FBUjtBQUFpQkMsY0FBUSxFQUFFO0FBQTNCLEtBSGQ7QUFBQSxjQUtHSjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTUsscUJBQXFCLEdBQUdDLG9EQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpBO0FBY0EsTUFBTUMsYUFBYSxHQUFHQyw2REFBVSxDQUM5QkMsNkdBRDhCLENBQWhDLEMsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFlBQVQsR0FBd0I7QUFDdEIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQywrQ0FBUSxFQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTUcsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFnQkMsK0RBQU8sRUFBN0I7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxvRUFBVyxFQUE1QjtBQUNBLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXO0FBQUViLFNBQUssRUFBRWM7QUFBVCxHQUFYLElBQXNDQywyREFBVyxDQUNyRHJCLHFCQURxRCxFQUVyRDtBQUNFc0Isa0JBQWMsRUFBRSxDQUFDO0FBQUVDLFdBQUssRUFBRUMsZ0VBQWtCQTtBQUEzQixLQUFEO0FBRGxCLEdBRnFELENBQXZELENBUHNCLENBY3RCO0FBQ0E7QUFDQTs7QUFFQSxRQUFNQyxlQUFlLEdBQUcsTUFBT0MsQ0FBUCxJQUFhO0FBQ25DO0FBQ0FBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBakIsY0FBVSxDQUFDLElBQUQsQ0FBVixDQUhtQyxDQUluQzs7QUFDQWtCLDBEQUFBLEdBTG1DLENBTW5DOztBQUNBLFVBQU07QUFBRXRCLFdBQUY7QUFBU3VCO0FBQVQsUUFBMkIsTUFBTWQsTUFBTSxDQUFDZSxtQkFBUCxDQUEyQjtBQUNoRWhDLFVBQUksRUFBRSxNQUQwRDtBQUVoRWlDLFVBQUksRUFBRWQsUUFBUSxDQUFDZSxVQUFULENBQW9CQyxnRUFBcEI7QUFGMEQsS0FBM0IsQ0FBdkMsQ0FQbUMsQ0FXbkM7O0FBQ0EsUUFBSTNCLEtBQUosRUFBVztBQUNUQyxjQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBc0IsMkRBQUE7QUFDQTtBQUNELEtBaEJrQyxDQWlCbkM7OztBQUNBLFVBQU1NLEtBQUssR0FBRyxNQUFNZixRQUFRLENBQUM7QUFBRWdCLGVBQVMsRUFBRTtBQUFFQyxhQUFLLEVBQUVQLGFBQWEsQ0FBQ1E7QUFBdkI7QUFBYixLQUFELENBQTVCLENBbEJtQyxDQW1CbkM7O0FBQ0ExQixVQUFNLENBQUMyQixJQUFQLENBQVk7QUFDVkMsY0FBUSxFQUFFLGFBREE7QUFFVmhCLFdBQUssRUFBRTtBQUFFYyxVQUFFLEVBQUVILEtBQUssQ0FBQ00sSUFBTixDQUFXckIsUUFBWCxDQUFvQmtCO0FBQTFCO0FBRkcsS0FBWixFQXBCbUMsQ0F3Qm5DOztBQUNBeEIsYUFBUyxHQXpCMEIsQ0EwQm5DOztBQUNBSCxjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FrQix5REFBQTtBQUNELEdBN0JELENBbEJzQixDQWlEdEI7QUFDQTtBQUNBOzs7QUFDQSxzQkFDRTtBQUFNLGFBQVMsRUFBRWEsK0VBQWpCO0FBQTBDLFlBQVEsRUFBRWhCLGVBQXBEO0FBQUEsZUFDR25CLEtBQUssaUJBQUksOERBQUMsa0RBQUQ7QUFBYyxXQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEWixlQUVFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFFb0MsNkVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUNqQyxzQkFDRSw4REFBQyw2REFBRDtBQUFVLFVBQU0sRUFBRXpDLGFBQWxCO0FBQUEsMkJBQ0UsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SEQ7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNMEMseUJBQXlCLEdBQUczQyxvREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTs7QUFRQSxNQUFNNEMsbUJBQW1CLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRO0FBQUVOO0FBQUYsQ0FBUixLQUFxQjtBQUMvQ00sT0FBSyxDQUFDQyxLQUFOLENBQVlELEtBQUssQ0FBQ0UsUUFBTixDQUFlUixJQUFJLENBQUNTLGNBQXBCLENBQVo7QUFDRCxDQUZEOztBQUllLFNBQVNDLGNBQVQsQ0FBd0I7QUFBRWI7QUFBRixDQUF4QixFQUFnQztBQUM3QyxRQUFNLENBQUNZLGNBQUQsRUFBaUI7QUFBRXhDLFdBQUY7QUFBV0gsU0FBWDtBQUFrQmtDO0FBQWxCLEdBQWpCLElBQTZDbkIsMkRBQVcsQ0FDNUR1Qix5QkFENEQsRUFFNUQ7QUFDRVQsYUFBUyxFQUFFO0FBQUVFLFFBQUUsRUFBRUE7QUFBTixLQURiO0FBRUVjLFVBQU0sRUFBRU47QUFGVixHQUY0RCxDQUE5RDtBQVFBLE1BQUl2QyxLQUFKLEVBQVcsb0JBQU8sOERBQUMsa0RBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVYLHNCQUNFO0FBQ0UsWUFBUSxFQUFFRyxPQURaO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxXQUFPLEVBQUV3QyxjQUhYO0FBSUUsYUFBUyxFQUFFRyxnRkFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDRDtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNDLE1BQVQsR0FBa0I7QUFDL0Isc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUMsK0RBQWhCO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRUEsbUVBQWQ7QUFBQSxpQ0FDRTtBQUFJLHFCQUFTLEVBQUVBLGdFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FLDhEQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFO0FBQUssZUFBUyxFQUFFQSxzRUFBaEI7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVlFLDhEQUFDLDBDQUFEO0FBQU0sVUFBSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQ0E7QUFFZSxTQUFTQyxNQUFULENBQWdCO0FBQUVDO0FBQUYsQ0FBaEIsRUFBOEI7QUFDM0Msc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBRUMsdUVBQWhCO0FBQUEsZ0JBQXNDRDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRDtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNFLEdBQVQsR0FBZTtBQUM1QixRQUFNQyxJQUFJLEdBQUdDLHdEQUFPLEVBQXBCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQWUvQywrREFBTyxFQUE1QjtBQUVBLFFBQU1nRCxZQUFZLEdBQ2hCSCxJQUFJLElBQ0pBLElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxNQUFWLENBQ0UsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEtBQXFCRCxLQUFLLElBQUlDLFFBQVEsQ0FBQ0MsT0FBVCxHQUFtQkQsUUFBUSxDQUFDRSxRQUE1QixHQUF1QyxDQUEzQyxDQUQ1QixFQUVFLENBRkYsQ0FGRjtBQU9BLHNCQUNFO0FBQUssYUFBUyxFQUFFQyx5RUFBaEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR1YsSUFBSSxpQkFDSDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFRSxRQUEvQjtBQUFBLDJDQUVFLDhEQUFDLCtDQUFEO0FBQThCLGVBQUssRUFBRUM7QUFBckMsV0FBZ0JBLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFRRSw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQSxvQkFISixFQWNHLENBQUNILElBQUQsaUJBQ0M7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyw2QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUEsb0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NEO0FBQ0E7QUFDQTtBQUVBLE1BQU1XLGdCQUFnQixHQUFHckUsb0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1lLFNBQVNzRSxPQUFULEdBQW1CO0FBQ2hDLFFBQU0sQ0FBQ0MsT0FBRCxJQUFZbkQsMkRBQVcsQ0FBQ2lELGdCQUFELEVBQW1CO0FBQzlDaEQsa0JBQWMsRUFBRSxDQUFDO0FBQUVDLFdBQUssRUFBRUMsK0RBQWtCQTtBQUEzQixLQUFEO0FBRDhCLEdBQW5CLENBQTdCO0FBSUEsc0JBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUVnRCxPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxRQUFULENBQWtCO0FBQUVQO0FBQUYsQ0FBbEIsRUFBZ0M7QUFDOUIsUUFBTTtBQUFFQztBQUFGLE1BQWNELFFBQXBCO0FBRUEsTUFBSSxDQUFDQyxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBRWQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVPLDBFQUFoQjtBQUFBLDRCQUNFO0FBQ0UsV0FBSyxFQUFDLEtBRFI7QUFFRSxTQUFHLEVBQUVQLE9BQU8sQ0FBQ1EsS0FBUixDQUFjQyxLQUFkLENBQW9CQyxvQkFGM0I7QUFHRSxTQUFHLEVBQUVWLE9BQU8sQ0FBQ1c7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLDhCQUNFO0FBQUEsa0JBQUtYLE9BQU8sQ0FBQ1c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLDhCQUFXWCxPQUFPLENBQUNZLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBQSxpQ0FBY2IsUUFBUSxDQUFDRSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQUEsb0NBQWlCWSw4REFBVyxDQUFDYixPQUFPLENBQUNZLEtBQVIsR0FBZ0JiLFFBQVEsQ0FBQ0UsUUFBMUIsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFZRSw4REFBQyxvREFBRDtBQUFnQixRQUFFLEVBQUVGLFFBQVEsQ0FBQzdCO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRCxDLENBRUQ7QUFDQTtBQUNBOzs7QUFDZSxTQUFTNEMsSUFBVCxHQUFnQjtBQUM3QixRQUFNQyxFQUFFLEdBQUd0Qix3REFBTyxFQUFsQjtBQUNBLFFBQU07QUFBRXVCLGNBQUY7QUFBY3RFO0FBQWQsTUFBNEJDLCtEQUFPLEVBQXpDO0FBRUEsTUFBSSxDQUFDb0UsRUFBTCxFQUFTLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDVCxzQkFDRTtBQUFLLGFBQVMsRUFBRyxHQUFFRSw0RUFBZ0IsSUFBR0QsVUFBVSxJQUFJQyw0RUFBZ0IsRUFBcEU7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUMseUVBQWhCO0FBQUEsbUJBQXFDSCxFQUFFLENBQUNKLElBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBUSxpQkFBUyxFQUFFUSw4RUFBbkI7QUFBMkMsZUFBTyxFQUFFekUsU0FBcEQ7QUFBQSxtQkFDRyxHQURILFdBRVEsR0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFO0FBQUEsaUJBQ0csQ0FBQ3FFLEVBQUUsQ0FBQ25CLElBQUgsQ0FBUXdCLE1BQVQsaUJBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRHRCLEVBRUdMLEVBQUUsQ0FBQ25CLElBQUgsQ0FBUXlCLEdBQVIsQ0FBYXRCLFFBQUQsaUJBQ1gsOERBQUMsUUFBRDtBQUE0QixnQkFBUSxFQUFFQTtBQUF0QyxTQUFlQSxRQUFRLENBQUM3QixFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQWNFO0FBQUEsOEJBQ0U7QUFBQSxrQkFBSTJDLDhEQUFXLENBQUNTLGlFQUFjLENBQUNQLEVBQUUsQ0FBQ25CLElBQUosQ0FBZjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBO0FBQ0E7QUFDQTs7QUFFTyxNQUFNMkIsc0JBQXNCLEdBQUcsa0JBQS9CO0FBRVAsSUFBSUMsWUFBSjs7QUFFQSxTQUFTQyxrQkFBVCxHQUE4QjtBQUM1QixTQUFPLElBQUlDLHdEQUFKLENBQWlCO0FBQ3RCQyxXQUFPLE1BRGU7QUFFdEJDLFFBQUksRUFBRUMsb0RBQUksQ0FBQyxDQUNUQyxrRUFBTyxDQUFDLENBQUM7QUFBRUMsbUJBQUY7QUFBaUJDO0FBQWpCLEtBQUQsS0FBcUM7QUFDM0MsVUFBSUQsYUFBSixFQUNFQSxhQUFhLENBQUNWLEdBQWQsQ0FBa0IsQ0FBQztBQUFFWSxlQUFGO0FBQVdDLGlCQUFYO0FBQXNCQztBQUF0QixPQUFELEtBQ2hCQyxPQUFPLENBQUNDLEdBQVIsQ0FDRyw2QkFBNEJKLE9BQVEsZUFBY0MsU0FBVSxXQUFVQyxJQUFLLEVBRDlFLENBREY7QUFLRixVQUFJSCxZQUFKLEVBQWtCSSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJMLFlBQWEsRUFBN0M7QUFDbkIsS0FSTSxDQURFLEVBVVRNLHNFQUFnQixDQUFDO0FBQ2ZDLFNBQUcsRUFBRSxtQ0FEVTtBQUMyQjtBQUMxQ0MsaUJBQVcsRUFBRSxTQUZFLENBRVM7O0FBRlQsS0FBRCxDQVZQLENBQUQsQ0FGWTtBQWlCdEI3RCxTQUFLLEVBQUUsSUFBSThELHlEQUFKLENBQWtCO0FBQ3ZCQyxrQkFBWSxFQUFFO0FBQ1pDLGFBQUssRUFBRTtBQUNMQyxnQkFBTSxFQUFFO0FBQ05DLHVCQUFXLEVBQUVDLHlEQUFlO0FBRHRCO0FBREg7QUFESztBQURTLEtBQWxCO0FBakJlLEdBQWpCLENBQVA7QUEyQkQ7O0FBRU0sU0FBU0MsZ0JBQVQsQ0FBMEJDLFlBQVksR0FBRyxJQUF6QyxFQUErQztBQUFBOztBQUNwRCxRQUFNQyxhQUFhLHFCQUFHekIsWUFBSCwyREFBbUJDLGtCQUFrQixFQUF4RCxDQURvRCxDQUdwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFJdUIsWUFBSixFQUFrQjtBQUNoQjtBQUNBLFVBQU1FLGFBQWEsR0FBR0QsYUFBYSxDQUFDRSxPQUFkLEVBQXRCLENBRmdCLENBSWhCOzs7QUFDQSxVQUFNOUUsSUFBSSxHQUFHK0UsZ0RBQUssQ0FBQ0osWUFBRCxFQUFlRSxhQUFmLEVBQThCO0FBQzlDO0FBQ0FHLGdCQUFVLEVBQUUsQ0FBQ0MsZ0JBQUQsRUFBbUJDLFdBQW5CLEtBQW1DLENBQzdDLEdBQUdBLFdBRDBDLEVBRTdDLEdBQUdELGdCQUFnQixDQUFDRSxNQUFqQixDQUF5QkMsQ0FBRCxJQUN6QkYsV0FBVyxDQUFDRyxLQUFaLENBQW1CQyxDQUFELElBQU8sQ0FBQ0MscURBQU8sQ0FBQ0gsQ0FBRCxFQUFJRSxDQUFKLENBQWpDLENBREMsQ0FGMEM7QUFGRCxLQUE5QixDQUFsQixDQUxnQixDQWVoQjs7QUFDQVYsaUJBQWEsQ0FBQ3RFLEtBQWQsQ0FBb0JrRixPQUFwQixDQUE0QnhGLElBQTVCO0FBQ0QsR0F6Qm1ELENBMkJwRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsWUFBbUMsT0FBTzRFLGFBQVAsQ0EvQmlCLENBaUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFJLENBQUN6QixZQUFMLEVBQW1CQSxZQUFZLEdBQUd5QixhQUFmO0FBRW5CLFNBQU9BLGFBQVA7QUFDRDtBQUVNLFNBQVNhLGNBQVQsQ0FBd0JDLE1BQXhCLEVBQWdDO0FBQUVDO0FBQUYsQ0FBaEMsRUFBMkM7QUFDaEQsTUFBSUEsS0FBSixFQUFXO0FBQ1RBLFNBQUssQ0FBQ3pDLHNCQUFELENBQUwsR0FBZ0N3QyxNQUFNLENBQUNwRixLQUFQLENBQWF3RSxPQUFiLEVBQWhDO0FBQ0Q7O0FBRUQsU0FBT2MsU0FBUDtBQUNEO0FBRU0sU0FBU0MsU0FBVCxDQUFtQkQsU0FBbkIsRUFBOEI7QUFDbkMsUUFBTUUsS0FBSyxHQUFHRixTQUFTLENBQUMxQyxzQkFBRCxDQUF2QjtBQUNBLFFBQU02QyxLQUFLLEdBQUdDLDhDQUFPLENBQUMsTUFBTXRCLGdCQUFnQixDQUFDb0IsS0FBRCxDQUF2QixFQUFnQyxDQUFDQSxLQUFELENBQWhDLENBQXJCO0FBQ0EsU0FBT0MsS0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7OztBQ3JHYyxTQUFTdEIsZUFBVCxHQUEyQjtBQUN4QyxTQUFPO0FBQ0x3QixXQUFPLEVBQUUsS0FESjs7QUFFTEMsUUFBSSxDQUFDQyxRQUFELEVBQVc7QUFBRUMsVUFBSSxFQUFFO0FBQUVDLFlBQUY7QUFBUUM7QUFBUjtBQUFSLEtBQVgsRUFBc0M7QUFDeEMsVUFBSSxDQUFDSCxRQUFMLEVBQWUsT0FBTyxLQUFQO0FBQ2YsWUFBTUksWUFBWSxHQUFHSixRQUFRLENBQUNLLEtBQVQsQ0FBZUgsSUFBZixFQUFxQkEsSUFBSSxHQUFHQyxLQUE1QixFQUFtQ25CLE1BQW5DLENBQTJDc0IsQ0FBRCxJQUFPQSxDQUFqRCxDQUFyQjtBQUNBLGFBQU8sQ0FBQyxDQUFDRixZQUFZLENBQUN4RCxNQUFmLElBQXlCd0QsWUFBaEM7QUFDRCxLQU5JOztBQVFMeEIsU0FBSyxDQUFDb0IsUUFBUSxHQUFHLEVBQVosRUFBZ0JPLFFBQWhCLEVBQTBCO0FBQUVOLFVBQUksRUFBRTtBQUFFQyxZQUFJLEdBQUc7QUFBVDtBQUFSLEtBQTFCLEVBQWtEO0FBQ3JELFlBQU1NLE1BQU0sR0FBRyxDQUFDLEdBQUdSLFFBQUosQ0FBZjs7QUFDQSxXQUFLLElBQUlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLFFBQVEsQ0FBQzNELE1BQTdCLEVBQXFDLEVBQUU2RCxDQUF2QyxFQUEwQztBQUN4Q0QsY0FBTSxDQUFDTixJQUFJLEdBQUdPLENBQVIsQ0FBTixHQUFtQkYsUUFBUSxDQUFDRSxDQUFELENBQTNCO0FBQ0Q7O0FBQ0QsYUFBT0QsTUFBUDtBQUNEOztBQWRJLEdBQVA7QUFnQkQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDakJjLFNBQVMxRCxjQUFULENBQXdCMUIsSUFBeEIsRUFBOEI7QUFDM0MsU0FBT0EsSUFBSSxDQUFDQyxNQUFMLENBQVksQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEtBQXFCO0FBQ3RDLFFBQUksQ0FBQ0EsUUFBUSxDQUFDQyxPQUFkLEVBQXVCLE9BQU9GLEtBQVAsQ0FEZSxDQUNEOztBQUNyQyxXQUFPQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0UsUUFBVCxHQUFvQkYsUUFBUSxDQUFDQyxPQUFULENBQWlCWSxLQUFwRDtBQUNELEdBSE0sRUFHSixDQUhJLENBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUFzRSw0REFBQSxDQUFpQixrQkFBakIsRUFBcUMsTUFBTUMsc0RBQUEsRUFBM0M7QUFDQUQsNERBQUEsQ0FBaUIscUJBQWpCLEVBQXdDLE1BQU1DLHFEQUFBLEVBQTlDO0FBQ0FELDREQUFBLENBQWlCLGtCQUFqQixFQUFxQyxNQUFNQyxxREFBQSxFQUEzQzs7QUFFQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhcEI7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLFFBQU16QyxZQUFZLEdBQUcwQyxtRUFBUyxDQUFDRCxTQUFELENBQTlCO0FBRUEsc0JBQ0UsOERBQUMsMERBQUQ7QUFBZ0IsVUFBTSxFQUFFekMsWUFBeEI7QUFBQSwyQkFDRSw4REFBQyxnRUFBRDtBQUFBLDZCQUNFLDhEQUFDLHVEQUFEO0FBQUEsK0JBQ0UsOERBQUMsU0FBRCxvQkFBZXlDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRUQsK0RBQWVtQixLQUFmLEU7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmltcG9ydCBzdHlsZXNEb3QgZnJvbSBcIi4uL3N0eWxlcy9Eb3QubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRDb3VudCh7IGNvdW50IH0pIHtcclxuICAvLyBpZiAoIWNvdW50KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzRG90LnJvb3R9XHJcbiAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IFsxLCAyLCAxXSB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwidHdlZW5cIiwgZHVyYXRpb246IDAuMyB9fVxyXG4gICAgPlxyXG4gICAgICB7Y291bnR9XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHtcclxuICBFbGVtZW50cyxcclxuICBDYXJkRWxlbWVudCxcclxuICB1c2VTdHJpcGUsXHJcbiAgdXNlRWxlbWVudHMsXHJcbn0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IG5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcIi4uL2xpYi9jb250ZXh0L2NhcnRTdGF0ZVwiO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tIFwiLi4vbGliL2hvb2tzL1VzZXJcIjtcclxuXHJcbmltcG9ydCBzdHlsZXNDaGVja291dEZvcm0gZnJvbSBcIi4uL3N0eWxlcy9DaGVja291dEZvcm0ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHN0eWxlc1NpY2tCdXR0b24gZnJvbSBcIi4uL3N0eWxlcy9TaWNrQnV0dG9uLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBDUkVBVEVfT1JERVJfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gQ1JFQVRFX09SREVSX01VVEFUSU9OKCR0b2tlbjogU3RyaW5nISkge1xyXG4gICAgY2hlY2tvdXQodG9rZW46ICR0b2tlbikge1xyXG4gICAgICBpZFxyXG4gICAgICBjaGFyZ2VcclxuICAgICAgdG90YWxcclxuICAgICAgaXRlbXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXHJcbiAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJU0hBQkxFX0tFWVxyXG4pO1xyXG5cclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICAgICAgICAgIENPTVBPTkVOVFxyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgY2xvc2VDYXJ0IH0gPSB1c2VDYXJ0KCk7XHJcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xyXG4gIGNvbnN0IFtjaGVja291dCwgeyBlcnJvcjogZ3JhcGhxbEVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBDUkVBVEVfT1JERVJfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gICAgRVZFTlQgSEFORExFUlNcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgLy8gMS4gU3RvcCB0aGUgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgYW5kIHR1cm4gdGhlIGxvYWRlciBvblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIC8vIDIuIFN0YXJ0IHRoZSBwYWdlIHRyYW5zaXRpb25cclxuICAgIG5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgLy8gMy4gQ3JlYXRlIHRoZSBwYXltZW50IG1ldGhvZCB2aWEgc3RyaXBlIChUb2tlbiBjb21lcyBiYWNrIGhlcmUgaWYgc3VjY2Vzc2Z1bClcclxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuICAgICAgdHlwZTogXCJjYXJkXCIsXHJcbiAgICAgIGNhcmQ6IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpLFxyXG4gICAgfSk7XHJcbiAgICAvLyA0LiBIYW5kbGUgYW55IGVycm9ycyBmcm9tIHN0cmlwZVxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgblByb2dyZXNzLmRvbmUoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gNS4gU2VuZCB0aGUgdG9rZW4gZnJvbSBzdGVwIDMgdG8gb3VyIGtleXN0b25lIHNlcnZlciwgdmlhIGEgY3VzdG9tIG11dGF0aW9uIVxyXG4gICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBjaGVja291dCh7IHZhcmlhYmxlczogeyB0b2tlbjogcGF5bWVudE1ldGhvZC5pZCB9IH0pO1xyXG4gICAgLy8gNi4gQ2hhbmdlIHRoZSBwYWdlIHRvIHZpZXcgdGhlIG9yZGVyXHJcbiAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBcIi9vcmRlci9baWRdXCIsXHJcbiAgICAgIHF1ZXJ5OiB7IGlkOiBvcmRlci5kYXRhLmNoZWNrb3V0LmlkIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIDcuIENsb3NlIHRoZSBjYXJ0XHJcbiAgICBjbG9zZUNhcnQoKTtcclxuICAgIC8vIDguIFR1cm4gdGhlIGxvYWRlciBvZmZcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgblByb2dyZXNzLmRvbmUoKTtcclxuICB9O1xyXG5cclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gICAgICAgICAgICAgUkVUVVJOXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlc0NoZWNrb3V0Rm9ybS5yb290fSBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfT5cclxuICAgICAge2Vycm9yICYmIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPn1cclxuICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzU2lja0J1dHRvbi5yb290fT5cclxuICAgICAgICBDaGVja291dCBOb3dcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICAgICAgICAgIENPTVBPTkVOVFxyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrb3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVQcm9taXNlfT5cclxuICAgICAgPENoZWNrb3V0Rm9ybSAvPlxyXG4gICAgPC9FbGVtZW50cz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcblxyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5pbXBvcnQgc3R5bGVzRGVsZXRlQ2FydEl0ZW0gZnJvbSBcIi4uL3N0eWxlcy9EZWxldGVDYXJ0SXRlbS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgREVMRVRFX0NBUlRfSVRFTV9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBERUxFVEVfQ0FSVF9JVEVNKCRpZDogSUQhKSB7XHJcbiAgICBkZWxldGVDYXJ0SXRlbShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXBkYXRlQ2FjaGVGdW5jdGlvbiA9IChjYWNoZSwgeyBkYXRhIH0pID0+IHtcclxuICBjYWNoZS5ldmljdChjYWNoZS5pZGVudGlmeShkYXRhLmRlbGV0ZUNhcnRJdGVtKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGVDYXJ0SXRlbSh7IGlkIH0pIHtcclxuICBjb25zdCBbZGVsZXRlQ2FydEl0ZW0sIHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfV0gPSB1c2VNdXRhdGlvbihcclxuICAgIERFTEVURV9DQVJUX0lURU1fTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczogeyBpZDogaWQgfSxcclxuICAgICAgdXBkYXRlOiB1cGRhdGVDYWNoZUZ1bmN0aW9uLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBvbkNsaWNrPXtkZWxldGVDYXJ0SXRlbX1cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXNEZWxldGVDYXJ0SXRlbS5yb290fVxyXG4gICAgPlxyXG4gICAgICAmdGltZXM7XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzSGVhZGVyIGZyb20gXCIuL0hlYWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuL2NhcnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNIZWFkZXIuYmFyfT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzSGVhZGVyLmFuY2hvcjF9PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzSGVhZGVyLmxvZ299PlNpY2sgRml0czwvaDE+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxOYXYgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzSGVhZGVyW1wic3ViLWJhclwiXX0+XHJcbiAgICAgICAgPHA+U2VhcmNoPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENhcnQgb3BlbiAvPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9MYXlvdXQubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyU3R5bGVzfT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwiLi4vbGliL2hvb2tzL1VzZXJcIjtcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCIuLi9saWIvY29udGV4dC9jYXJ0U3RhdGVcIjtcclxuXHJcbmltcG9ydCBTaWduT3V0IGZyb20gXCIuL1NpZ25PdXRcIjtcclxuaW1wb3J0IENhcnRDb3VudCBmcm9tIFwiLi9DYXJ0Q291bnRcIjtcclxuaW1wb3J0IGNsYXNzZXNOYXYgZnJvbSBcIi4uL3N0eWxlcy9OYXZTdHlsZXMubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgeyBvcGVuQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG5cclxuICBjb25zdCBub3NDYXJ0SXRlbXMgPVxyXG4gICAgdXNlciAmJlxyXG4gICAgdXNlci5jYXJ0LnJlZHVjZShcclxuICAgICAgKHRhbGx5LCBjYXJ0SXRlbSkgPT4gdGFsbHkgKyAoY2FydEl0ZW0ucHJvZHVjdCA/IGNhcnRJdGVtLnF1YW50aXR5IDogMCksXHJcbiAgICAgIDBcclxuICAgICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3Nlc05hdi5uYXZ9PlxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+UHJvZHVjdHM8L0xpbms+XHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZWxsXCI+U2VsbDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb3JkZXJzXCI+T3JkZXJzPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50XCI+QWNjb3VudDwvTGluaz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29wZW5DYXJ0fT5cclxuICAgICAgICAgICAgTXkgQ2FydFxyXG4gICAgICAgICAgICA8Q2FydENvdW50IGtleT17bm9zQ2FydEl0ZW1zfSBjb3VudD17bm9zQ2FydEl0ZW1zfSAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8U2lnbk91dCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7IXVzZXIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25JblwiPlNpZ24gSW48L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25VcFwiPlNpZ24gVXA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3JlcXVlc3RSZXNldEZvcmdldFBhc3N3b3JkXCI+Rm9yZ2V0IFBhc3N3b3JkPC9MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tIFwiLi4vbGliL2hvb2tzL1VzZXJcIjtcclxuXHJcbmNvbnN0IFNJR05PVVRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24ge1xyXG4gICAgZW5kU2Vzc2lvblxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25PdXQoKSB7XHJcbiAgY29uc3QgW3NpZ25vdXRdID0gdXNlTXV0YXRpb24oU0lHTk9VVF9NVVRBVElPTiwge1xyXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaWdub3V0fT5cclxuICAgICAgU2lnbiBPdXRcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCIuLi9saWIvaG9va3MvVXNlclwiO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcIi4uL2xpYi9jb250ZXh0L2NhcnRTdGF0ZVwiO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSBcIi4uL2xpYi91dGlsL2Zvcm1hdE1vbmV5XCI7XHJcbmltcG9ydCBjYWxjVG90YWxQcmljZSBmcm9tIFwiLi4vbGliL3V0aWwvY2FsY1RvdGFsUHJpY2VcIjtcclxuaW1wb3J0IERlbGV0ZUNhcnRJdGVtIGZyb20gXCIuL0RlbGV0ZUNhcnRJdGVtXCI7XHJcbmltcG9ydCBDaGVja291dCBmcm9tIFwiLi9DaGVja291dFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlc0NhcnQgZnJvbSBcIi4uL3N0eWxlcy9DYXJ0U3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBzdHlsZXNTdXByZW1lIGZyb20gXCIuLi9zdHlsZXMvU3VwcmVtZS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgc3R5bGVzQ2FydEl0ZW0gZnJvbSBcIi4uL3N0eWxlcy9DYXJ0SXRlbS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgc3R5bGVzQ2xvc2VCdXR0b24gZnJvbSBcIi4uL3N0eWxlcy9DbG9zZUJ1dHRvbi5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAgICAgICAgICAgICAgQ0FSVCBJVEVNXHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbmZ1bmN0aW9uIENhcnRJdGVtKHsgY2FydEl0ZW0gfSkge1xyXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gY2FydEl0ZW07XHJcblxyXG4gIGlmICghcHJvZHVjdCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzQ2FydEl0ZW0ucm9vdH0+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgc3JjPXtwcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgPHA+UHJpY2U6IHtwcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICA8cD5RdWFudGl0eToge2NhcnRJdGVtLnF1YW50aXR5fTwvcD5cclxuICAgICAgICA8cD5Ub3RhbCBQcmljZToge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UgKiBjYXJ0SXRlbS5xdWFudGl0eSl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERlbGV0ZUNhcnRJdGVtIGlkPXtjYXJ0SXRlbS5pZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gICAgICAgICAgICAgIENBUlRcclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xyXG4gIGNvbnN0IG1lID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHsgY2FydElzT3BlbiwgY2xvc2VDYXJ0IH0gPSB1c2VDYXJ0KCk7XHJcblxyXG4gIGlmICghbWUpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc0NhcnQucm9vdH0gJHtjYXJ0SXNPcGVuICYmIHN0eWxlc0NhcnQub3Blbn1gfT5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzU3VwcmVtZS5yb290fT57bWUubmFtZX0ncyBDYXJ0PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlc0Nsb3NlQnV0dG9uLnJvb3R9IG9uQ2xpY2s9e2Nsb3NlQ2FydH0+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICBDbG9zZXtcIiBcIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7IW1lLmNhcnQubGVuZ3RoICYmIDxwPlRoZXJlIGlzIG5vIGl0ZW0gaW4geW91ciBjYXJ0ITwvcD59XHJcbiAgICAgICAge21lLmNhcnQubWFwKChjYXJ0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhcnRJdGVtIGtleT17Y2FydEl0ZW0uaWR9IGNhcnRJdGVtPXtjYXJ0SXRlbX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8cD57Zm9ybWF0TW9uZXkoY2FsY1RvdGFsUHJpY2UobWUuY2FydCkpfTwvcD5cclxuICAgICAgICA8Q2hlY2tvdXQgLz5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBmcm9tIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvbGluay9lcnJvclwiO1xyXG5pbXBvcnQgbWVyZ2UgZnJvbSBcImRlZXBtZXJnZVwiO1xyXG5pbXBvcnQgaXNFcXVhbCBmcm9tIFwibG9kYXNoL2lzRXF1YWxcIjtcclxuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHBhZ2luYXRpb25GaWVsZCBmcm9tIFwiLi9wYWdpbmF0aW9uRmllbGRcIjtcclxuXHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG5leHBvcnQgY29uc3QgQVBPTExPX1NUQVRFX1BST1BfTkFNRSA9IFwiX19BUE9MTE9fU1RBVEVfX1wiO1xyXG5cclxubGV0IGFwb2xsb0NsaWVudDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiLFxyXG4gICAgbGluazogZnJvbShbXHJcbiAgICAgIG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcclxuICAgICAgICBpZiAoZ3JhcGhRTEVycm9ycylcclxuICAgICAgICAgIGdyYXBoUUxFcnJvcnMubWFwKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGlmIChuZXR3b3JrRXJyb3IpIGNvbnNvbGUubG9nKGBbTmV0d29yayBlcnJvcl06ICR7bmV0d29ya0Vycm9yfWApO1xyXG4gICAgICB9KSxcclxuICAgICAgY3JlYXRlVXBsb2FkTGluayh7XHJcbiAgICAgICAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbFwiLCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiwgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxyXG4gICAgICB9KSxcclxuICAgIF0pLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcclxuICAgICAgdHlwZVBvbGljaWVzOiB7XHJcbiAgICAgICAgUXVlcnk6IHtcclxuICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICBhbGxQcm9kdWN0czogcGFnaW5hdGlvbkZpZWxkKCksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xyXG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gICAgSUYgSU5JVElBTCBTVEFURSBJUyBBVkFJTEFCTEVcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcclxuICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcclxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xyXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpO1xyXG5cclxuICAgIC8vIE1lcmdlIHRoZSBleGlzdGluZyBjYWNoZSBpbnRvIGRhdGEgcGFzc2VkIGZyb20gZ2V0U3RhdGljUHJvcHMvZ2V0U2VydmVyU2lkZVByb3BzXHJcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoaW5pdGlhbFN0YXRlLCBleGlzdGluZ0NhY2hlLCB7XHJcbiAgICAgIC8vIGNvbWJpbmUgYXJyYXlzIHVzaW5nIG9iamVjdCBlcXVhbGl0eSAobGlrZSBpbiBzZXRzKVxyXG4gICAgICBhcnJheU1lcmdlOiAoZGVzdGluYXRpb25BcnJheSwgc291cmNlQXJyYXkpID0+IFtcclxuICAgICAgICAuLi5zb3VyY2VBcnJheSxcclxuICAgICAgICAuLi5kZXN0aW5hdGlvbkFycmF5LmZpbHRlcigoZCkgPT5cclxuICAgICAgICAgIHNvdXJjZUFycmF5LmV2ZXJ5KChzKSA9PiAhaXNFcXVhbChkLCBzKSlcclxuICAgICAgICApLFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVzdG9yZSB0aGUgY2FjaGUgd2l0aCB0aGUgbWVyZ2VkIGRhdGFcclxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKTtcclxuICB9XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vICAgICAgU0VSVkVSIFNJREUgUkVOREVSSU5HXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vICAgICBDTElFTlQgU0lERSBSRU5ERVJJTkdcclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQ3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxyXG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xyXG5cclxuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFwb2xsb1N0YXRlKGNsaWVudCwgeyBwcm9wcyB9KSB7XHJcbiAgaWYgKHByb3BzKSB7XHJcbiAgICBwcm9wc1tBUE9MTE9fU1RBVEVfUFJPUF9OQU1FXSA9IGNsaWVudC5jYWNoZS5leHRyYWN0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFnZVByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKHBhZ2VQcm9wcykge1xyXG4gIGNvbnN0IHN0YXRlID0gcGFnZVByb3BzW0FQT0xMT19TVEFURV9QUk9QX05BTUVdO1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKHN0YXRlKSwgW3N0YXRlXSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb25GaWVsZCgpIHtcclxuICByZXR1cm4ge1xyXG4gICAga2V5QXJnczogZmFsc2UsXHJcbiAgICByZWFkKGV4aXN0aW5nLCB7IGFyZ3M6IHsgc2tpcCwgZmlyc3QgfSB9KSB7XHJcbiAgICAgIGlmICghZXhpc3RpbmcpIHJldHVybiBmYWxzZTtcclxuICAgICAgY29uc3QgcmVxdWlyZWRJdGVtID0gZXhpc3Rpbmcuc2xpY2Uoc2tpcCwgc2tpcCArIGZpcnN0KS5maWx0ZXIoKHgpID0+IHgpO1xyXG4gICAgICByZXR1cm4gISFyZXF1aXJlZEl0ZW0ubGVuZ3RoICYmIHJlcXVpcmVkSXRlbTtcclxuICAgIH0sXHJcblxyXG4gICAgbWVyZ2UoZXhpc3RpbmcgPSBbXSwgaW5jb21pbmcsIHsgYXJnczogeyBza2lwID0gMCB9IH0pIHtcclxuICAgICAgY29uc3QgbWVyZ2VkID0gWy4uLmV4aXN0aW5nXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmNvbWluZy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIG1lcmdlZFtza2lwICsgaV0gPSBpbmNvbWluZ1tpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGNUb3RhbFByaWNlKGNhcnQpIHtcclxuICByZXR1cm4gY2FydC5yZWR1Y2UoKHRhbGx5LCBjYXJ0SXRlbSkgPT4ge1xyXG4gICAgaWYgKCFjYXJ0SXRlbS5wcm9kdWN0KSByZXR1cm4gdGFsbHk7IC8vIHByb2R1Y3RzIGNhbiBiZSBkZWxldGVkLCBidXQgdGhleSBjb3VsZCBzdGlsbCBiZSBpbiB5b3VyIGNhcnRcclxuICAgIHJldHVybiB0YWxseSArIGNhcnRJdGVtLnF1YW50aXR5ICogY2FydEl0ZW0ucHJvZHVjdC5wcmljZTtcclxuICB9LCAwKTtcclxufVxyXG4iLCJpbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZUFwb2xsbyB9IGZyb20gXCIuLi9saWIvYXBvbGxvL2Fwb2xsb0NsaWVudFwiO1xyXG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tIFwiLi4vbGliL2NvbnRleHQvY2FydFN0YXRlXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL25wcm9ncmVzcy5jc3NcIjtcclxuXHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKTtcclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxyXG4gICAgICA8Q2FydFByb3ZpZGVyPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvQ2FydFByb3ZpZGVyPlxyXG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFyXCI6IFwiSGVhZGVyX2Jhcl9fVFNVNFVcIixcblx0XCJzdWItYmFyXCI6IFwiSGVhZGVyX3N1Yi1iYXJfXzNaZXBTXCIsXG5cdFwibG9nb1wiOiBcIkhlYWRlcl9sb2dvX18zQXNyQlwiLFxuXHRcImFuY2hvcjFcIjogXCJIZWFkZXJfYW5jaG9yMV9fMkw3MmpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImlubmVyU3R5bGVzXCI6IFwiTGF5b3V0X2lubmVyU3R5bGVzX19tUmlEQVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2XCI6IFwiTmF2U3R5bGVzX25hdl9fMlJoWFpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJvb3RcIjogXCJDYXJ0SXRlbV9yb290X18xRTdxVlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicm9vdFwiOiBcIkNhcnRTdHlsZXNfcm9vdF9fM1BWSm5cIixcblx0XCJvcGVuXCI6IFwiQ2FydFN0eWxlc19vcGVuX18zd29xOFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicm9vdFwiOiBcIkNoZWNrb3V0Rm9ybV9yb290X18zQ3E3YlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicm9vdFwiOiBcIkNsb3NlQnV0dG9uX3Jvb3RfXzExNlkzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyb290XCI6IFwiRGVsZXRlQ2FydEl0ZW1fcm9vdF9fMzA5X1dcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJvb3RcIjogXCJEb3Rfcm9vdF9fMW5WN2hcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJvb3RcIjogXCJTaWNrQnV0dG9uX3Jvb3RfX1ZreERIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyb290XCI6IFwiU3VwcmVtZV9yb290X18xelU0elwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L2xpbmsvZXJyb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlZXBtZXJnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9pc0VxdWFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
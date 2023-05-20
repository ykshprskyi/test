import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { addOrder } from "../../../service/services/cart";
import { useDispatch, useSelector } from "react-redux";
import "./orderForm.scss";
import { actions } from "../../../service/actions/actions";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface OrderFormData {
  name: string;
  email: string;
  address: string;
  phone: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid E-mail")
    .required("E-mail is required"),
  address: yup.string().required("Adress is required"),
  phone: yup.string().required("Phone is required"),
});

const OrderForm: React.FC = () => {
  const dispatch: any = useDispatch();
  const LoggedUser = useSelector((state: any) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>();

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const navigate: NavigateFunction = useNavigate();

  const onSubmit = (data: OrderFormData) => {
    if (!LoggedUser) {
      dispatch(addOrder(data));
    }
    dispatch(addOrder(data));
    alert("Order succesfully created");
    navigate("/");
    dispatch(actions.clearCart());
  };

  const handleFormValidation = async (data: OrderFormData) => {
    try {
      if (!LoggedUser) {
        await schema.validate(data, { abortEarly: false });
      }
      onSubmit(data);
    } catch (validationErrors) {
      const formattedErrors = validationErrors?.inner?.reduce(
        (acc, currentError) => ({
          ...acc,
          [currentError.path]: currentError.message,
        }),
        {}
      );
      setFormErrors(formattedErrors);
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit(handleFormValidation)}>
      {!LoggedUser ? (
        <div className="order-form_wrapper">
          <div className="order-form_name order-form_item">
            <label htmlFor="name">Name:</label>
            <input id="name" {...register("name")} />
            {formErrors.name && (
              <span className="error-message">{formErrors.name}</span>
            )}
          </div>
          <div className="order-form_email order-form_item">
            <label htmlFor="email">E-mail:</label>
            <input id="email" {...register("email")} />
            {formErrors.email && (
              <span className="error-message">{formErrors.email}</span>
            )}
          </div>
          <div className="order-form_adress order-form_item">
            <label htmlFor="address">Address:</label>
            <input id="address" {...register("address")} />
            {formErrors.address && (
              <span className="error-message">{formErrors.address}</span>
            )}
          </div>
          <div className="order-form_phone order-form_item">
            <label htmlFor="phone">Phone:</label>
            <input id="phone" {...register("phone")} />
            {formErrors.phone && (
              <span className="error-message">{formErrors.phone}</span>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      <button className="order-form_submit order-form_item" type="submit">
        Make an order
      </button>
    </form>
  );
};

export default OrderForm;

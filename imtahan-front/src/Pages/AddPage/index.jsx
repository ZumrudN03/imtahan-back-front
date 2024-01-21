import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { SearchContext } from "../../Context/search";

function AddPage() {
  const [newCard, setNewCard] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const { search, handleSeacrh } = useContext(SearchContext);

  function getFetch() {
    fetch("http://localhost:3100/")
      .then((res) => res.json())
      .then((data) => setNewCard(data));
  }
  useEffect(() => {
    getFetch();
  }, []);

  function deleteCard(id) {
    fetch("http://localhost:3100/" + id, {
      method: "DELETE",
    }).then(() => getFetch());
  }
  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <div className="addPage">
        <div className="formik">
          <Formik
            initialValues={{ image: "", title: "", price: "" }}
            validationSchema={Yup.object({
              image: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              title: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
              price: Yup.number().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              fetch("http://localhost:3100/", {
                //post methodu funksiya olaraq yazanda error verdiyi ucun bele bir deyisiklik etdim
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(() => getFetch());
            }}
          >
            <Form>
              <label htmlFor="image">Image</label>
              <Field name="image" type="text" />
              <ErrorMessage name="image" />

              <label htmlFor="title">Title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" />

              <label htmlFor="price">Price</label>
              <Field name="price" type="text" />
              <ErrorMessage name="price" />

              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
        <div className="table">
          <div className="table_btn">
            <button
              onClick={() => {
                setSortBy({ field: "title", asc: true });
              }}
            >
              A-Z
            </button>
            <button
              onClick={() => {
                setSortBy({ field: "title", asc: false });
              }}
            >
              Z-A
            </button>
            <button
              onClick={() => {
                setSortBy(null);
              }}
            >
              Default
            </button>

            <button
              onClick={() => {
                setSortBy({ field: "price", asc: true });
              }}
            >
              Price:Up
            </button>
            <button
              onClick={() => {
                setSortBy({ field: "price", asc: false });
              }}
            >
              Price:Down
            </button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSeacrh(e)}
          />
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {[...newCard]
                .sort((a, b) => {
                  if (!sortBy) {
                    return 0;
                  } else if (sortBy.asc) {
                    return a[sortBy.field] > b[sortBy.field]
                      ? 1
                      : b[sortBy.field] > a[sortBy.field]
                      ? -1
                      : 0;
                  } else if (sortBy.asc === false) {
                    return a[sortBy.field] > b[sortBy.field]
                      ? -1
                      : b[sortBy.field] > a[sortBy.field]
                      ? 1
                      : 0;
                  }
                })
                .filter((x) =>
                  x.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((x) => (
                  <tr  key={x._id}>
                    <td>
                      <img src={x.image} alt="" />
                    </td>
                    <td>{x.title}</td>
                    <td>${x.price}</td>
                    <td>
                      <i
                        className="fa-solid fa-trash"
                        onClick={() => deleteCard(x._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AddPage;

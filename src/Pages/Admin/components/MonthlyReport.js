import React, { useState } from 'react'
import { ModalBody } from 'react-bootstrap'
import { Modal, ModalHeader } from 'reactstrap'
import { Formik, Field, FieldArray, ErrorMessage } from 'formik'

const MonthlyReport = () => {
  const [modal, setModal] = useState(false)
  const [grossMargin, setGrossMargin] = useState(0)

  const initialValues = {
    fields: [
      { name: 'Manpower Cost', value: '' },
      { name: 'Rent', value: '' },
      { name: 'Logistic Cost', value: '' },
      { name: 'Monthly Sale', value: '' },
    ],
  }

  const { fields } = initialValues

  const calculateGrossMargin = (values) => {
    const margin =
      parseFloat(values.fields[0].value) +
      parseFloat(values.fields[1].value) +
      parseFloat(values.fields[2].value) -
      parseFloat(values.fields[3].value)
    setGrossMargin(margin)
    console.log(margin)
  }

  const inputStyleForm = {
    border: '1px solid green',
    padding: '12px',
    borderRadius: '5px',
  }

  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Financial Report</ModalHeader>
        <ModalBody>
      
        <Formik
            initialValues={{ fields }}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {({ values }) => (
              <form>
                <FieldArray name="fields">
                  {({ push, remove }) => (
                    <div>
                      {values.fields.map((field, index) => (
                        <div key={index}>
                          <label htmlFor={`fields[${index}].name`}>{field.name}</label>
                          <input
                            type="number"
                            style={inputStyleForm}
                            // id={`fields[${index}].name`}
                            name={`fields[${index}].value`}
                            // placeholder="enter cost"
                          />

                          {/* <label htmlFor={`fields[${index}].value`}>Value:</label>
                      <Field
                        type="text"
                        id={`fields[${index}].name`}
                        name={`fields[${index}].value`}
                      /> */}

                          {index > 2 && (
                            <button type="button" onClick={() => remove(index)}>
                              Remove Field
                            </button>
                          )}

                          <ErrorMessage name={`fields[${index}].value`} component="div" />
                        </div>
                      ))}

                      <button type="button" onClick={() => push({ name: '', value: '' })}>
                        Add Field
                      </button>
                    </div>
                  )}
                </FieldArray>
                <div>
                  <div>
                    <h1>Gross Margin Calculator</h1>
                    <div>
                      <button onClick={calculateGrossMargin}>Calculate Gross Margin</button>
                    </div>
                    <h2>Gross Margin: {grossMargin}</h2>
                  </div>

                  <lable>Net Margin</lable>
                  <input />
                </div>

                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
      <button
        className="btn"
        style={{ background: '#B4CD93', color: 'black', padding: '10px' }}
        onClick={() => setModal(true)}
      >
        Monthly Report
      </button>
    </div>
  )
}

export default MonthlyReport

import React, { useState } from 'react'
import { ModalBody } from 'react-bootstrap'
import { reportValidationSchema } from '../../../validation/formSchema'
import { Modal, ModalHeader } from 'reactstrap'
import { Formik, Field, FieldArray, ErrorMessage } from 'formik'
import '../styles/monthlyReport.css'
import '../styles/adminAddForm.scss'

const MonthlyReport = () => {
  const [modal, setModal] = useState(false)
  const [grossMargin, setGrossMargin] = useState(0)
  const [netMargin, setNetMargin] = useState(0)

  const initialValues = {
    fields: [
      { name: 'Manpower Cost', value: '' },
      { name: 'Rent', value: '' },
      { name: 'Logistic Cost', value: '' },
      { name: 'Monthly Sale', value: '' },
    ],
  }

  const calculateGrossMargin = (values) => {
    const { fields } = values
    const margin =
      parseFloat(fields[0].value) +
      parseFloat(fields[1].value) +
      parseFloat(fields[2].value) -
      parseFloat(fields[3].value)
    setGrossMargin(margin)
    console.log(margin)
  }

  const calculateNetMargin = (values) => {
    const { fields } = values
    const netMarginValue = parseFloat(fields[3].value) - parseFloat(grossMargin)
    setNetMargin(netMarginValue)
    console.log(netMarginValue)
  }
const netMarginStyle = {
    color: netMargin < 0 ? 'red' : 'green',
  };

  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Financial Report</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={reportValidationSchema}
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
                        <div
                          key={index}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: '10px',
                            width: '100%',
                          }}
                        >
                          <label htmlFor={`fields[${index}].name`} style={{ width: '100px' }}>
                            {field.name}
                          </label>
                          <Field
                            type="number"
                            className="border border-gray-400"
                            name={`fields[${index}].value`}
                          />

                          {index > 3 && (
                            <button type="button" onClick={() => remove(index)}>
                              Remove Field
                            </button>
                          )}

                          <ErrorMessage name={`fields[${index}].value`} component="div" />
                        </div>
                      ))}

                      <button type="button" className="button" onClick={() => push({ name: '', value: '' })}>
                        Add Field
                      </button>
                    </div>
                  )}
                </FieldArray>
                <div style={{ width: '100%', marginTop: '20px' }}>
                  <div>
                    <h1>Gross Margin</h1>
                    <div>
                      <button type="button" className="button" onClick={() => calculateGrossMargin(values)}>
                        Gross Margin
                      </button>
                    </div>
                    <h2>Gross Margin: {grossMargin}</h2>
                
                    <h1>Net Margin Calculator</h1>
                    <div>
                      <button type="button" className="button" onClick={() => calculateNetMargin(values)}>
                        Calculate Net Margin
                      </button>
                    </div>
                    <h2 style={netMarginStyle}>Net Margin: {netMargin}</h2>
                  </div>
                </div>

                <button type="submit" className="button">
                  Submit
                </button>
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

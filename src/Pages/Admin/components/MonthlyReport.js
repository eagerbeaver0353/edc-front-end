import React, { useState } from 'react'
import { ModalBody } from 'react-bootstrap'
import { Modal, ModalHeader } from 'reactstrap'
import { Formik, Field, FieldArray, ErrorMessage } from 'formik';

const MonthlyReport = () => {
  const [modal, setModal] = useState(false)
  

  /* const handleFormSubmit = (e) => {
    e.preventDefault()
  }*
  /*const handleGrossMargin = () => {
    const TotalCost = parseFloat(manpowerCost) + parseFloat(rentCost) + parseFloat(logisticsCost)
    const Margin = TotalCost - parseFloat(monthlySale)
    setGrossMargin(Margin)
  }
  const handleNetMargin = () => {
    const TotalCost = parseFloat(manpowerCost) + parseFloat(rentCost) + parseFloat(logisticsCost)
    let CalculateNetMargin = TotalCost-parseFloat(monthlySale) ;
    setNetMargin(CalculateNetMargin)
  }*/

const inputStyleForm ={
  border:"1px solid green",
  padding:"12px",
  borderRadius:"5px"
}
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Financial Report</ModalHeader>
        <ModalBody>
  
      <Formik
        initialValues={{
          fields: [
            { name: 'Manpower Cost', value: '' },
            { name: 'Rent', value: '' },
            { name: 'Logistic Cost', value: '' },
            { name: 'Monthly Sale', value: '' },
          ],
        }}
        onSubmit={(values) => {
          console.log(values);
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
                        type="text"
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

                      <ErrorMessage
                        name={`fields[${index}].value`}
                        component="div"
                      />
                    </div>
                  ))}

                  <button type="button" onClick={() => push({ name: '', value: '' })}>
                    Add Field
                  </button>
                </div>
              )}
              
            </FieldArray>
             <div>
              <lable>Gross Margin</lable>
               <input/>
              <lable>Gross Margin</lable>
               <input/>
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

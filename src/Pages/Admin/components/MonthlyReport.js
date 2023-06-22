import React, { useState } from 'react'
import { ModalBody } from 'react-bootstrap'
import { Modal, ModalHeader, Row, Col } from 'reactstrap'
import './monthlyReport.css'

const MonthlyReport = () => {
  const [modal, setModal] = useState(false)
  const [manpowerCost, setManpowerCost] = useState('')
  const [rentCost, setRentCost] = useState('')
  const [logisticsCost, setLogisticsCost] = useState('')
  const [monthlySale, setMonthlySale] = useState('')
  const [grossMargin, setGrossMargin] = useState('')
  const [netMargin, setNetMargin] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()


  }
  const handleGrossMargin = () => {
    const TotalCost = parseFloat(manpowerCost) + parseFloat(rentCost) + parseFloat(logisticsCost)
    const Margin = TotalCost - parseFloat(monthlySale)
    setGrossMargin(Margin)
  }
  const handleNetMargin = () => {
    const TotalCost = parseFloat(manpowerCost) + parseFloat(rentCost) + parseFloat(logisticsCost)
    let CalculateNetMargin = TotalCost-parseFloat(monthlySale) ;
    setNetMargin(CalculateNetMargin)
  }
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Financial Report</ModalHeader>
        <ModalBody>
          <form onSubmit={handleFormSubmit}>
            <Row>
              <Col lg={12}>
                <div>
                <div>
                  {/* for Man power costing  */}
                  <label htmlFor="name">Men Power Cost</label>
                  <input
                    style={{ width: '50%' }}
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={manpowerCost}
                    onChange={(e) => setManpowerCost(e.target.value)}
                  />
                  {/* for rent cost */}
                  <label htmlFor="name">Rent Cost</label>
                  <input
                    style={{ width: '50%' }}
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={rentCost}
                    onChange={(e) => setRentCost(e.target.value)}
                  />
                  </div>

                  {/* for logistics Cost */}
                  <label htmlFor="name">Logistics Cost</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={logisticsCost}
                    onChange={(e) => setLogisticsCost(e.target.value)}
                  />

                  {/* for monthly Sale */}
                  <label htmlFor="name">Monthly Sale</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={monthlySale}
                    onChange={(e) => setMonthlySale(e.target.value)}
                  />

                  {/* for uploading Monthly Sale */}
                  <label htmlFor="name">Upload Monthly Sale Report</label>
                  <input type="file" className="form-control" />

                  {/* for gross margin */}
                  <label htmlFor="name">Gross Margin</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter any digit"
                    value={grossMargin}
                    onChange={() => handleGrossMargin()}
                  />
                  {/* for net margin */}
                  <label htmlFor="name">Net Margin</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={netMargin}
                    onChange={() => handleNetMargin()}
                    style={{

                      backgroundColor: netMargin >= 0 ? 'green' : 'red',
                    }}
                  />
                  <button
                    type='submit'
                    className="btn"
                    style={{ background: 'green', color: 'white', padding: '10px', margin: '20px' }}
                  >
                    Submit Report
                  </button>
                  <button onClick={()=>setModal(false)}>Cancel</button>
                </div>
              </Col>
            </Row>
          </form>
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

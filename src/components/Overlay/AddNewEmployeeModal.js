import "./AddNewEmployeeModal.scss"
import { Button, CircularProgress } from "@mui/material"
import Modal from '../Modal/Modal'
import InputRow from "../Modal/InputRow"
import SelectRow from "../Modal/SelectRow"
import { useState, useEffect } from "react"
import { useMutation } from "react-query"
import addNewEmployee from "../../api-calls/employee/addNewEmployee"

const AddNewEmployeeModal = (props) => {
    // Form control
    const [formInput, setFormInput] = useState(
        {fullName: "", 
        address: "", age: 0, moneyHour: "",
        sex: "Male", startDate: new Date().toISOString().substring(0, 10), phone: "", teamNo: 1})

    // Submit handler
    const mutateNewEmployee = useMutation(addNewEmployee)

    useEffect(()=>{
        if (mutateNewEmployee.isSuccess){
            props.onBackdropClick()
            props.refetch()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutateNewEmployee.isSuccess])

    const submitHandler = e => {
        e.preventDefault()
        mutateNewEmployee.mutate(formInput)
    }

    return (
    <Modal onBackdropClick={() => props.onBackdropClick()} onCloseClick={() => props.onBackdropClick()} closeBackgroundColor={"white"}>
        <div className="modal-header">Add new Employee</div>
        <div className="modal-container">
            <form className="modal-body" onSubmit={submitHandler}>
                <div className="modal-info">
                    <div className="modal-single">
                        <InputRow name="fullName" required label="Full name employee" placeholder="Nguyễn Văn A" 
                                   value={formInput.fullName} setInput={setFormInput} maxLength={255}/>
                        <span style={{textAlign: "right", width: "100%"}}>{formInput.fullName.length}/255</span>
                    </div>
                </div>
                <div className="modal-info">
                    <div className="modal-left">       
                        <InputRow name="address" required label="Address *" placeholder="123, Cầu Giấy, Hà Nội" 
                                    value={formInput.address} setInput={setFormInput} maxLength={300}/>    
                        <InputRow name="age" required label="Age employee *" placeholder="18" type="number"
                                    value={formInput.age} 
                                    handleInput={Age => { 
                                        if (Age > 70) return 70
                                        else return Age
                                    }}
                                    setInput={setFormInput} max={100}/>
                        <InputRow name="moneyHour" required label="Money/hour *" placeholder="1000" type="number"
                                    value={formInput.moneyHour} setInput={setFormInput}/>                       
                    </div>
                    <div className="modal-right">
                        <SelectRow name="sex" required label="Sex employee *"options={["Male", "Female"]} 
                                    value={formInput.sex} setInput={setFormInput}/>
                        <InputRow name="startDate" required label="Start day *" type="date"
                                    value={formInput.startDate} setInput={setFormInput}/>
                        <InputRow name="phone" required label="Phone number *" placeholder="0123456789" regex="^([+]|[0-9]){0,1}[0-9]{0,12}$"
                                    value={formInput.phone} setInput={setFormInput} maxLength={12}/>
                    </div>
                </div>
                <div className="modal-info">
                    <div className="modal-single">
                        <SelectRow name="teamNo" required label="Team *" 
                            realOptions={props.teams.map(team => {
                                return { option: team.teamName, value: parseInt(team.teamNo) }
                            })}
                            value={formInput.teamNo} setInput={setFormInput}/>
                    </div>
                </div>
                <div className="modal-button-group">
                    <Button disabled={mutateNewEmployee.isLoading} 
                        variant="contained" 
                        style={{backgroundColor:"transparent", color:"black"}} 
                        onClick={props.onBackdropClick}>
                            Cancel
                    </Button>
                    <Button disabled={mutateNewEmployee.isLoading }
                        variant="contained" type="submit"
                        style={{backgroundColor:"#ededed", marginLeft:"5px", color:"black"}} 
                        >
                            {mutateNewEmployee.isLoading ? <CircularProgress size={'25px'}/> :'Submit'}
                    </Button>
                </div>
            </form>
        </div>
    </Modal>)
}

export default AddNewEmployeeModal
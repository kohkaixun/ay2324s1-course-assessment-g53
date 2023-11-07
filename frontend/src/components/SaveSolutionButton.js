import { Button } from "@mui/material"
import useCookie from "./useCookie"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const REACT_APP_COLLAB_HOST = process.env.REACT_APP_COLLAB_HOST ? process.env.REACT_APP_COLLAB_HOST : "http://localhost:9000/api/collab"

const SaveSolutionButton = ({userCode, question}) => {
    const { getAuthCookie } = useCookie()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        console.log(userCode)

        axios.post(REACT_APP_COLLAB_HOST + "/save_solution", {
            user_cookie: getAuthCookie(),
            question: question,
            attempt: userCode,
            date: new Date().toISOString().split('T')[0],
        }, {
            headers: {
            "Content-Type": "application/json",
            }
        })
            .catch(error => {
            console.error('Error:', error)
            throw error
        })

        navigate("..\\..\\QuestionPage")
    }

    return <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ width: "150px", height: "50px", margin: "30px" }} >
        Save and Exit
    </Button>
}

export default SaveSolutionButton
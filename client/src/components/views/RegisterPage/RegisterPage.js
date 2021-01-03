
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_action';

function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    // 명칭은 자기 마음대로
    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) =>{
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) =>{
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) =>{
        //page가 다시 새로고침 되지 않도록 하기위해 preventDefault()사용
        event.preventDefault();

        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(registerUser(body))
            .then(response=>{
                if(response.payload.success){
                    props.history.push("/login")
                    alert("회원가입 성공")
                } else{
                    alert("회원가입에 실패")
                }
            })
      

    }
    return (
        <div style={{
            display: 'flex',justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>

            <form style={{ display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />

                    <label>Name</label>
                    <input type="text" value={Name} onChange={onNameHandler} />

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />

                    <label>Confirm Password</label>
                    <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                    <br />
                    <button>
                        회원 가입
                    </button>

            </form>
        
        </div>
    )
}

export default RegisterPage

import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";


@inject('stores')
@observer
class SignUp extends Component {
    state={
        account: '',
        password: '',
        wantpassword: '',
        name: '',
        telephone: '',
        phone: '',
        postcode1: '',
        postcode2: '',
        address: '',
        email: '',
        Agree: 0,
        goToLogin: false
    };

    render() {
        if(this.state.goToLogin)
            return <Redirect to=''/>

        return (
            <div>

                <div className="body">
                    <div className="body-title">회원가입</div>
                    <div className="body-content">
                        <div className="body-content-text">
                            OO 가족을 위한 전문 쇼핑몰로 저렴한 가격과 신개념 고객서비스를 통해 고객 만족을 최우선으로 합니다.<br/>
                            쇼핑몰에 회원으로 가입하시면 보다 편리합니다.
                        </div>
                        <div className="body-content-input">
                            <div>희망아이디:<input value={this.state.account} onChange={this.updateAccount}/><button>중복확인</button> (6~10자의 영문 및 숫자 가능하며 여백은 사용할 수 없습니다)</div>
                            <div>희망패스워드:<input value={this.state.password} onChange={this.updatePassword}/>(6~10자 이내로 영문과 숫자의 조합으로 만드세요)</div>
                            <div>패스워드확인:<input value={this.state.wantpassword} onChange={this.updateWantPassword}/></div>
                            <div>성명:<input value={this.state.name} onChange={this.updateName}/>(이름에 공백은 제거해 주세요)</div>
                            <div>전화번호:<input value={this.state.telephone} onChange={this.updateTelephone}/></div>
                            <div>핸드폰<input value={this.state.phone} onChange={this.updatePhone}/></div>
                            <div>우편번호<input value={this.state.postcode1} onChange={this.updatePostcode1}/>-<input value={this.state.postcode2} onChange={this.updatePostcode2}/>(배달시 혼란을 피하기위해 정확히 기입해주시기 바랍니다)</div>
                            <div>주소:<input value={this.state.address} onChange={this.updateAddress}/></div>
                            <div>e-mail<input value={this.state.email} onChange={this.updateEmail}/></div>
                        </div>
                        <div className="body-content-agree">
                            회원약관
                            <div className="agree-text">
                                회원약관
                            </div>
                            회원약관에 <button value="0" onClick={this.updateAgree}>동의함</button><button value="-1" onClick={this.updateAgree}>동의안함</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    addNewUser = async () => {
        if(await this.props.stores.UserStore.addNewUser(this.state)){
            this.setState({
                ...this.state,
                goToLogin:true
            });
        }
    }

    updateAccount = event => {
        this.setState({
            ...this.state,
            account:event.target.value
        });
    };
    updatePassword = event => {
        this.setState({
            ...this.state,
            password:event.target.value
        });
    };
    updateWantPassword = event => {
        this.setState({
            ...this.state,
            wantpassword:event.target.value
        });
    };
    updateName = event => {
        this.setState({
            ...this.state,
            name:event.target.value
        });
    };
    updateTelephone = event => {
        this.setState({
            ...this.state,
            telephone:event.target.value
        });
    };
    updatePhone = event => {
        this.setState({
            ...this.state,
            phone:event.target.value
        });
    };
    updatePostcode1 = event => {
        this.setState({
            ...this.state,
            postcode1:event.target.value
        });
    };
    updatePostcode2 = event => {
        this.setState({
            ...this.state,
            postcode2:event.target.value
        });
    };
    updateAddress = event => {
        this.setState({
            ...this.state,
            address:event.target.value
        });
    };
    updateEmail = event => {
        this.setState({
            ...this.state,
            email:event.target.value
        });
    };
    updateAgree = event => {
        this.setState({
            ...this.state,
            Agree:event.target.value
        });
    }
}

export default SignUp;
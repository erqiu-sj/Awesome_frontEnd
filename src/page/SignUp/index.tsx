/*
 * @Author: 邱狮杰
 * @Date: 2021-01-29 22:40:37
 * @LastEditTime: 2021-03-27 20:05:22
 * @FilePath: /Awesome_frontEnd-main/src/page/SignUp/index.tsx
 * @Description: 登陆注册
 */
import React, {FC} from "react";
import Login from "../../components/login/login";
import {message} from "antd";
import {inputConfig, loginType} from "../../types/page/components/login";
import {useStataOfSrote} from "../../hooks/useStataOfStore";
import {setSignUpDescriptionField} from "../../redux/action/SignUp";
import {register as registerHttp} from "../../http/user";
// import { useQuery } from "react-query";

import "./index.scss";
import {traversalVerification} from "../../utils/login";
import {REGISTER, USER} from "../../redux/reducers/SignUp";

type Props = {};

// async function login(conf: loginType, history: any) {
// const userName = conf.inputList[0].val;
// const result = await LoveLogin({ userName });
// if (result.status !== http.StatusOK) return message.warning("你是谁?(╹⚇╹?)");
// setStoage(CacheTable.loverToken, result.data.Result);
// }

const SignUp: FC<Props> = () => {
    const useLoginConf = useStataOfSrote("SignUpStatus").get(
        "status"
    ) as loginType;

    /**
     * @description 获取useLoginConf中的具体参数
     * @param filed 指定placeholder
     * @return { inputConfig }
     */
    function getFiled(filed: string): inputConfig {
        const Conf = useLoginConf.inputList;
        const result = Conf.find((item) => item.placeholder === filed);
        if (result) return result;
        return {type: "", placeholder: "", val: ""};
    }

    function readSend() {
        useLoginConf.title === REGISTER ? register() : login();
    }

    async function register() {
        try {
            const isRegister = traversalVerification(useLoginConf.inputList);
            if (isRegister) {
                const result = await registerHttp({
                    isRegister: true,
                    userName: getFiled(USER).val,
                });
                console.log(result)
            }
        } catch (e) {
            message.warn(e.message);
        }
    }

    function login() {
    }

    return (
        <div className="love">
            <Login
                conf={useLoginConf}
                setAction={setSignUpDescriptionField}
                onDetermine={readSend}
            />
        </div>
    );
};
export default SignUp;

import React, { Component } from "react";

import contentHeader from "../common/template/contentHeader";
import content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";

class BillingCycle extends Component {
    render(){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro'/>
                <Content>
                    Ciclos de Pagamentos
                </Content>
            </div>
        )
    }
}

export default BillingCycle
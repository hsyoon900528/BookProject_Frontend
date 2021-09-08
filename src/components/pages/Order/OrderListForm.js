import React, {useEffect, useState} from 'react';
import CartListView from '../../elements/ui/CartListView';

export default function OrderListForm() {

    const [cartDatas, setCartDatas] = useState([]);

    let process = require('../../../db/myProcess.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/cart`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCartDatas(data);
        });
    },[process.IP, process.PORT]);

    return(
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">거래 내역입니다.</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>사진</th>
                                        <th>책 제목</th>
                                        <th>가격</th>
                                        <th>갯수</th>
                                        <th>총 가격</th>
                                        <th>삭제하기</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartDatas.map(item => (
                                            <CartListView
                                                key = {item.id}
                                                data = {item}
                                                setCartDatas = {setCartDatas}
                                            />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-shiping-update-wrapper">
                            <div className="cart-shiping-update">
                                <a href="/shop-grid-standard">Continue Shopping</a>
                            </div>
                            <div className="cart-clear">
                                <button>Clear Shopping Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
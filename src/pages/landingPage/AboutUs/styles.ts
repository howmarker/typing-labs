import styled from "styled-components";

export const Styles = styled.div`

margin-top: 57px;

.content{
    margin-top: 19px;
    .text{
        font-size: 40px;
        span{
           font-weight: 700;
           color: #FF2447;
        }
    }
    .info{
        margin-top: 30px;
        padding: 30px;
        border: 1px solid #373132;
        border-radius: 4px;
        .info-list{
            width: 100%;
            max-width: 1380px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .item{
                text-align: center;
                .item-desc{
                    font-size: 18px;
                }
                .item-title{
                    margin-top: 11px;
                    font-size: 40px;
                    font-weight: 700;
                }

                &:nth-child(2){
                    padding: 0 150px;
                    border-left: 1px solid #373132;
                    border-right: 1px solid #373132;
                }
            }
        }
    }
}

@media only screen and (max-width: 1530px){
    .content{
        .text{
            font-size: 32px;
        }
    }
}

@media only screen and (max-width: 1280px){
    .content{
        .text{
            font-size: 24px;
        }
        .info{
            .info-list{
                .item{
                    .item-title{
                        font-size: 32px;
                    }
                    &:nth-child(2){
                        padding: 0 50px;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 991px){
    .content{
        .text{
            font-size: 20px;
        }
        .info{
            padding: 20px 0;
            
            .info-list{
                .item{
                    padding: 0 20px;
                    .item-desc{
                        font-size: 16px;
                    }
                    .item-title{
                        font-size: 24px;
                    }
                    &:nth-child(2){
                        padding: 0 20px;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 768px){
    .content{
        .text{
            font-size: 18px;
        }
        .info{
            
            .info-list{
                flex-direction: column;
                gap: 20px;
                .item{
                    padding:  0;
                    width: 100%;
                    max-width: 450px;
                    &:nth-child(2){
                        padding: 20px 0;
                        border: none;
                        border-top: 1px solid #373132;
                        border-bottom: 1px solid #373132;
                    }
                }
            }
        }
    }
}
`
import styled from "styled-components";

export const Styles = styled.div`
margin-top: 200px;
.module{
    .content{
       margin-top: 30px;
       display: flex;
       align-items: center;
       background-image: url("/images/home/bg_problem.png");
       background-position: top center;
       background-size: cover;
       background-repeat: no-repeat;
       border-radius: 8px;
       padding: 59px 40px;
       padding-right: 107px;
       gap: 45px;

        .info{
            width: 100%;
            max-width: 670px;
            display: flex;
            flex-direction: column;
            gap: 32px;
            .item{
                display: flex;
                gap: 8px;
                padding-bottom: 32px;
                border-bottom: 1px solid #4A272C;

                &:last-child{
                    border: none;
                }
                .idx{
                    font-size: 18px;
                    font-weight: 700;
                }
                .item-content{
                    .title{
                        font-size: 32px;
                        font-weight: 500;
                    }
                    .desc{
                        margin-top: 8px;
                        font-size: 18px;
                        color: #ACACAC;
                        span{
                            font-weight: 700;
                        }
                    }
                }
            }
        }
        .pitchdeck{
            width: 745px;
            aspect-ratio: 745/400;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            background-image: url("/images/home/bg-info.png");
            background-position: top center;
            background-size: 100%;
            background-repeat: no-repeat;
            padding: 0 15px;
            .text{
                max-width: 608px;
                font-size: 52px;
                font-weight: 700;
                text-align: center;
                span{
                    color: #FF2447;
                    font-weight: 700;
                }
            }
            .btn{
                padding: 8px 16px;
                border-radius: 4px;
                background: #fff;
                border: none;
                outline: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 18px;
                font-weight: 500;
                color: #0D0D0F;
                transition: all .2s linear;
                .icon{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: #FF2B3F;
                }

                &:hover{
                    opacity: 0.8;
                    transform:scale(0.95);
                }
            }
        }
    }
}

@media only screen and (max-width: 1530px){
    margin-top: 150px;
    .module{
        .content{
            padding: 40px 30px;
            .pitchdeck {
                .text{
                    font-size: 36px;
                }
            }
        }
    }
}

@media only screen and (max-width: 1280px){
    margin-top: 100px;
    .module{
        .content{
            .info{
                max-width: 550px;
                .item{
                    .idx{
                        font-size: 16px;
                    }
                    .item-content{
                        .title{
                            font-size: 24px;
                        }
                        .desc{
                            font-size: 16px;
                        }
                    }
                }
            }
            .pitchdeck {
                .text{
                    font-size: 28px;
                }
                .btn{
                    font-size: 16px;
                    .icon{
                        width: 30px;
                        height: 30px;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 1100px){
    .module{
        .content{
            flex-direction: column;
            gap: 30px;
            .info{
                max-width: 550px;
                .item{
                    flex-direction: column;
                    align-items: center;
                    .item-content{
                        text-align: center;
                    }
                }
            }
            .pitchdeck {
                width: 100%;
                max-width: 500px;
            }
        }
    }
}

@media only screen and (max-width: 768px){
    margin-top: 80px;
    .module{
        .content{
           padding: 30px 20px;
            .pitchdeck {
                width: 100%;
                max-width: 450px;
                .text{
                    font-size: 22px;
                }
            }
        }
    }
}

@media only screen and (max-width: 430px){
    margin-top: 60px;
    .module{
        .content{
            margin-top: 24px;
           padding: 30px 15px;
           .info{
            gap: 20px;
            .item{
                padding-bottom: 20px;
                .item-content{
                    .title{
                        font-size: 20px;
                    }
                }
            }
           }
            .pitchdeck {
                width: 100%;
                max-width: 450px;
                .text{
                    font-size: 20px;
                }
            }
        }
    }
}
`
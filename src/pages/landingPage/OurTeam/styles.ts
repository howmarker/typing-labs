import styled from "styled-components";

export const Styles = styled.div`
margin-top: 200px;
.module{
    .head{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        .title{
            font-size: 52px;
            font-weight: 700;
        }
    }
    .content{
        margin-top: 80px;
        .team-list{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            max-width: 1260px;
            margin: 0 auto;
            .item{
                border-radius: 4px;
                background: linear-gradient(180deg, rgba(62, 56, 57, 0.5) 0%, rgba(62, 56, 57, 0.09) 100%);
                border: 1px solid #373132;
                padding: 20px 30px;
                padding-top: 62px;
                position: relative;
                cursor: pointer;
                transition: all .2s linear;
                &:hover{
                    transform: translateY(-15px);
                }
                .founder{
                    position: absolute;
                    top:0;
                    left: 50%;
                    transform:  translate(-50%, -50%);
                    padding: 4px 16px;
                    border-radius: 4px;
                    background: #FF2447;
                    font-size: 18px;
                }
                .avt{
                    width: 230px;
                    aspect-ratio: 1/1;
                    border-radius: 50%;
                    overflow: hidden;
                    margin: 0 auto;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .name{
                    margin-top: 20px;
                    text-align: center;
                    font-size: 28px;
                    font-weight: 700;
                }
                .info{
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    margin-top: 20px;
                    padding: 16px 0;
                    border-top: 1px solid #3731325E;
                    border-bottom: 1px solid #3731325E;
                    min-height: 153px;
                    .info_item{
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        .icon{
                            display: flex;
                            align-items: center;
                        }
                        .text{
                            font-size: 16px;
                           span{
                            font-weight: 600;
                           }
                        }
                    }
                }
                .social{
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    .link{
                        cursor: pointer;
                        transition: all .2s linear;
                        &:hover{
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 1530px){
    margin-top: 150px;
    .module{
        .head{
            gap: 24px;
            .title{
                font-size: 44px;
            }
        }
        .content{
            margin-top: 60px;
        }
    }
}

@media only screen and (max-width: 1280px){
    margin-top: 100px;
    .module{
        .head{
            .title{
                font-size: 36px;
            }
        }
        .content{
            margin-top: 60px;
            .team-list{
                gap: 24px;
                .item{
                    padding: 20px;
                    padding-top: 40px;
                    .avt{
                        width: 180px;
                    }
                    .name{
                        font-size: 24px;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 991px){
    .module{
        .head{
            .title{
                font-size: 32px;
            }
        }
        .content{
            .team-list{
                gap:40px 24px;
                grid-template-columns: repeat(2, 1fr);
               
            }
        }
    }
}

@media only screen and (max-width: 768px){
    margin-top: 80px;
    .module{
        .head{
            .title{
                font-size: 28px;
            }
        }
        .content{
            margin-top: 50px;
            .team-list{
                grid-template-columns: repeat(1, 1fr);
                .item{
                    width: 100%;
                    max-width: 500px;
                    margin: 0 auto;
                    .avt{
                        width: 160px;
                    }
                    .name{
                        font-size: 24px;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 430px){
    margin-top: 60px;
}

`
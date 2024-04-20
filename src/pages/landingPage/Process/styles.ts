import styled from "styled-components";

export const Styles = styled.div`
padding-top: 200px;


.module{
    background-image: url("/images/home/bg_process.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 12px;
   padding: 40px 75px 24px 30px;
    .content{
        margin-top: 35px;
        .text{
            font-size: 40px;
            span{
                font-weight: 700;
            }
        }
        .step-list{
            display: flex;
            gap: 20px;
            margin-top: 24px;
            .item{
                padding: 86px 50px;
                background: #FFFFFF99;
                border-radius: 4px;
                display: flex;
                align-items: center;
                gap: 30px;
                justify-content: space-between;
                cursor: pointer;
                transition: all .5s linear;
                overflow: hidden;

                width: 172px;
                min-width: 172px;
                height: 266px;
                max-height: 266px;
                overflow: hidden;
                .left{
                    display: grid;
                    grid-template-columns: 72px 1fr;
                    align-items: center;
                    gap: 48px;
                    
                }
                .idx{
                    width: 72px;
                    aspect-ratio: 1/1;
                    border-radius: 50%;
                    border: 1px solid #0D0D0F;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 40px;
                    font-weight: 600;
                    color: #0D0D0F;
                }

                .item-content{
                    display: flex;
                    align-items: center;
                    gap: 48px;
                    /* display: none; */
                    .title{
                        font-size: 60px;
                        font-weight: 600;
                        color: #0D0D0F;
                        white-space: nowrap;
                    }
                    .desc{
                        font-size: 18px;
                        color: #0D0D0F;
                        max-width: 450px;
                        opacity: 0;
                        transition: all .5s linear;
                        animation-delay: 0s;

                    }
                }
                .icon{
                    display: none;
                }
                &.active{
                    width: 100%;
                    background: #EBEBEB;
                    .idx{
                        background: #0D0D0F;
                        color: #fff;
                    }
                    .item-content{
                        display: flex;
                        .desc{
                            opacity: 1;
                            transition-delay: 0.5s;
                        }
                    }
                    .icon{
                        display: block;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 1530px){
    padding-top: 150px;
    .module{
        .content{
            margin-top: 30px;
            .text{
                font-size: 32px;
            }
            .step-list{
                .item{
                    padding: 60px 30px;
                    width: 120px;
                    min-width: 120px;
                    height: 200px;
                    min-height: 200px;
                    .left{
                        gap: 30px;
                        grid-template-columns: 60px 1fr;
                        .idx{
                            width: 60px;
                            font-size: 32px;
                        }
                        .item-content{
                            gap: 30px;
                            .title{
                                font-size: 48px;
                            }
                        }
                    }
                    .icon{
                        svg{
                            width: 80px;
                            height: auto;
                        }
                    }

                    &.active{}
                }
            }
        }
        
    }
}

@media only screen and (max-width: 1280px){
    padding-top: 100px;
    .module{
        padding: 40px 24px 24px 24px;
        .content{
            margin-top: 24px;
            .text{
                font-size: 24px;
            }
            .step-list{
                gap: 16px;
                .item{
                    padding: 60px 20px;
                    width: 90px;
                    min-width: 90px;
                    height: 200px;
                    min-height: 200px;
                    .left{
                        gap: 20px;
                        grid-template-columns: 50px 1fr;
                        .idx{
                            width: 50px;
                            font-size: 28px;
                        }
                        .item-content{
                            gap: 20px;
                            .title{
                                font-size: 36px;
                            }
                            .desc{
                                font-size: 16px;
                            }
                        }
                    }
                    .icon{
                        svg{
                            width: 66px;
                            height: auto;
                        }
                    }

                    &.active{}
                }
            }
        }
        
    }
}

@media only screen and (max-width: 768px){
    padding-top: 80px;
    .module{
        .content{
            margin-top: 20px;
            .text{
                font-size: 18px;
            }
            .step-list{
                gap: 16px;
                flex-direction: column;
                .item{
                    padding: 40px 20px;
                    width: 100%;
                    min-width: 100%;
                    height: auto;
                    min-height: auto;
                    background: #EBEBEB;
                   .left{
                    grid-template-columns: 44px 1fr;
                    gap: 16px;
                    .idx{
                        width: 44px;
                        font-size: 20px;
                    }
                        .item-content{
                            display: flex;
                            .title{
                                font-size: 24px;
                            }
                        }
                   }
                    .icon{
                        display: none;
                    }

                    &.active{
                        .left{
                            
                        }
                        .icon{
                            display: none;
                        }
                    }
                }
            }
        }
        
    }
}

@media only screen and (max-width: 430px){
    padding-top: 60px;
    .module{
        padding: 30px 15px;
        padding-bottom: 20px;
        .content{
            .text{
                font-size: 16px;
            }
            .step-list{
                .item{
                    padding: 24px 15px;
                    .left{
                        display: flex;
                        flex-direction: column;
                        .item-content{
                            flex-direction: column;
                            .desc{
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }
    }
}
`
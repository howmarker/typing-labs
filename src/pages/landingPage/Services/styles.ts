import styled from "styled-components";

export const Styles = styled.div`
padding-top: 200px;
.module{
   .content{
    .text{
        margin-top: 30px;
        font-size: 40px;
        max-width: 1050px;
        span{
            font-weight: 700;
            color: #FF2447;
        }
    }
    .info-list{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin-top: 30px;
        .item{
            padding: 24px;
            border-radius: 4px;
            background: #3E383980;
            cursor: pointer;
            transition: all .2s linear;
            .icon{
                position: relative;
                z-index: 1;
                width: 54px;
                &::after{
                    content: "";
                    display: inline-block;
                    width: 204px;
                    aspect-ratio: 1/1;
                    background-image: url("/images/home/shadow.png");
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: -1;
                }
            }
            .title{
                margin-top: 35px;
                font-size: 32px;
                font-weight: 600;
            }
            .desc{
                margin-top: 25px;
                font-size: 18px;
            }

            &:hover{
                transform: translateY(-15px);
            }
        }
    }
   }
}

@media only screen and (max-width: 1530px){
    padding-top: 150px;
    .module{
        .content{
            .text{
                font-size: 32px;
            }
            .info-list{
                .item{
                    .title{
                        margin-top: 20px;
                        font-size: 24px;
                    }
                    .desc{
                        margin-top: 20px;
                    }
                }
            }
        }
    }
}

@media only screen and (max-width: 1280px){
    padding-top: 100px;
    .module{
        .content{
            .text{
                margin-top: 24px;
                font-size: 24px;
            }
            .info-list{
                gap: 20px;
                .item{
                    .title{
                        margin-top: 20px;
                        font-size: 24px;
                    }
                    .desc{
                        margin-top: 20px;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 991px){
    .module{
        .content{
           
            .info-list{
                grid-template-columns: repeat(2, 1fr);
                
            }
        }
    }
}
@media only screen and (max-width: 768px){
    padding-top: 80px;
    .module{
        .content{
            .text{
                font-size: 18px;
            }
            .info-list{
                gap: 20px;
                .item{
                    padding: 20px 15px;
                    .title{
                        margin-top: 16px;
                        font-size: 20px;
                    }
                    .desc{
                        font-size: 16px;
                        margin-top: 16px;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 430px){
    padding-top: 60px;
    .module{
        .content{
            .text{
                font-size: 16px;
            }
            .info-list{
                grid-template-columns: repeat(1, 1fr);
                .item{
                    text-align: center;
                    .icon{
                        margin: 0 auto;
                    }
                }
            }
        }
    }
}
`
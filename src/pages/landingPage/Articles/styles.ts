import styled from "styled-components";

export const Styles = styled.div`
margin-top: 200px;
.module{
    .content{
        margin-top: 24px;
        .text{
            font-size: 40px;
            span{
                font-weight: 700;
                color: #FF2447;
            }
        }
        .news-list{
            margin-top: 24px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 60px 30px;
            
            .article{
                text-decoration: none;

                .image{
                    width: 100%;
                    aspect-ratio: 530/340;
                    border-radius: 4px;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: all .3s linear;

                    }
                }
                .title{
                    margin-top: 10px;
                    font-size: 22px;
                    font-weight: 600;
                    color: #fff;
                }
                .time{
                    margin-top: 8px;
                    font-size: 16px;
                    color: #D6D6D6;
                }

                &:hover{
                    .image{
                        img{
                            transform: scale(1.1);
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
        .content{
            .text{
                font-size: 32px;
            }
        }
    }
}
@media only screen and (max-width: 1280px){
    margin-top: 100px;
    .module{
        .content{
            .text{
                font-size: 24px;
            }
            .news-list{
                gap: 50px 24px;
            }
        }
    }
}
@media only screen and (max-width: 991px){
    .module{
        .content{
           
            .news-list{
                grid-template-columns: repeat(2,1fr);
            }
        }
    }
}
@media only screen and (max-width: 768px){
    margin-top: 80px;
    .module{
        .content{
           .text{
            font-size: 18px;
           }
            .news-list{
                .article{
                    .title{
                        font-size: 18px;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 600px){
    .module{
        .content{
           
            .news-list{
                gap: 40px 20px;
                grid-template-columns: repeat(1, 1fr);
                .article{
                    max-width: 400px;
                    margin: 0 auto;
                }
            }
        }
    }
}
@media only screen and (max-width: 600px){
    margin-top: 60px;
    .module{
        .content{
        .text{
            font-size: 16px;
        }
    }
    }
}
`
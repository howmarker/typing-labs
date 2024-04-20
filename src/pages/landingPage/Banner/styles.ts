import styled from "styled-components";

export const Styles = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
background-image: url("/images/home/bg_banner.png");
background-repeat: repeat;
background-position: top left;
position: relative;
overflow: hidden;
@keyframes identifier {
    from{
        transform: translate(-50%, -50%) scale(1.1);
    }
    to{
        transform: translate(-50%, -50%) scale(0.9);
    }
}
.module{
    text-align: center;
    position: relative;
    z-index: 1;
    &::after{
        content: "";
        display: inline-block;
        width: 724px;
        aspect-ratio:  1/1;
        background-image: url("/images/home/pie.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        animation: identifier 2s infinite alternate;
    }
    .title{
        font-size: 130px;
        font-weight: 700;
        line-height: 123%;
        color: #0A0B0C;
        text-shadow: 0px 0px 2px #FF2447;
        span{
            color: #FF2447;
            font-weight: 700;
            margin-left: 16px;
        }
    }
    .title-bt{
        font-size: 72px;
        line-height: 123%;
        color: #fff;
        font-weight: 700;
        span{
            font-weight: 700;
        }
    }
    .desc{
        margin-top: 30px;
        font-size: 18px;
        color: #fff;
        line-height: 123%;
    }
    .btn{
        border-radius: 4px;
        padding: 8px 16px;
        display: flex;
        align-items: center;
       gap: 10px;
       font-size: 18px;
       font-weight: 500;
       color: #fff;
       cursor: pointer;
       transition: all .2s linear;
       margin: 0 auto;
       margin-top: 30px;
       background: #FF2447;
       border: none;
       outline: none;
       span{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
       }

       &:hover{
        opacity: 0.8;
       }
    }
}

.scroll-down{
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    .text{
        font-size: 18px;
    }
}

@media only screen and (max-width: 1530px){
    .module{
        .title{
            font-size: 100px;
            span{
                margin-left: 8px;
            }
        }
        .title-bt{
            font-size: 60px;
        }

        &::after{
            width: 600px;
        }
    }
}
@media only screen and (max-width: 1280px){
    .module{
        .title{
            font-size: 80px;
        }
        .title-bt{
            font-size: 40px;
        }
        .desc{
            font-size: 16px;
        }
        .btn{
            font-size: 16px;
        }

        &::after{
            width: 600px;
        }
    }
    .scroll-down{
        .text{
            font-size: 16px;
        }
    }
}
@media only screen and (max-width: 991px){
    .module{
        .title{
            font-size: 70px;
        }
        .title-bt{
            font-size: 34px;
        }
        &::after{
            width: 550px;
        }
    }
}

@media only screen and (max-width: 768px){
    .module{
        .title{
            font-size: 46px;
        }
        .title-bt{
            font-size: 24px;
        }
        .desc{
            margin-top: 24px;
        }
        .btn{
            span{
                width: 30px;
                height: 30px;
            }
        }
        &::after{
            width: 500px;
        }
    }
}

@media only screen and (max-width: 480px){
    .module{
        .title{
            font-size: 36px;
        }
        .title-bt{
            font-size: 20px;
            margin-top: 12px;
        }
        .desc{
            margin-top: 24px;
        }
        .btn{
            span{
                width: 30px;
                height: 30px;
            }
        }
        &::after{
            width: 400px;
        }
    }
}
`
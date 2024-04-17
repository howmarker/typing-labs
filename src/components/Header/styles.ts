import styled from "styled-components";

export const Styles = styled.div`
position: fixed;
width: 100%;
top: 0;
left: 0;
padding: 0 20px;
padding-top: 28px;
z-index: 100;
background: transparent;
transition: all .2s linear;

.container{
    max-width: 1615px;
    background: linear-gradient(180deg, #5E121E 0%, #240C10 100%);
    border-radius: 4px;
    padding: 4px 15ox;
}
.header-module{
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    height: 59px;
    .logo{
        display: flex;
        align-items: center;
        gap: 12px;
        .part1{
            width: 50px;
        }
        .part2{
            width: 159px;
        }
    }
    .header-nav{
        .close{
            display: none;
        }
        .nav-list{
            display: flex;
            align-items: center;
            gap: 60px;
            .link{
                text-decoration: none;
                font-size: 18px;
                color: #fff;
                font-weight: 400;
                transition: all .2s linear;

                &:hover{
                    color: #FF2447;
                    font-weight: 500;
                }
            }
        }
    }
    .header-action{
        display: flex;
        align-items: center;
        gap: 24px;
        .social{
            display: flex;
            align-items: center;
            gap: 8px;
            .item{
                transition:  all .2s linear;
                svg{
                    width: 24px;
                    height: auto;
                }

                &:hover{
                    opacity: 0.8;
                }
            }
        }
        .btn{
            padding: 8px 16px;
            border-radius: 4px;
            background: #FFFFFF;
            border: none;
            outline: none;
            color: #0D0D0F;
            font-weight: 500;
            font-size: 18px;
            cursor: pointer;

            transition: all .2s linear;

            &:hover{
                background: #FF2447;
                color: #fff;
            }
        }
        .toggle{
            display: none;
            align-items: center;
        }
    }
}

&.isScroll{
    padding-top: 0;
    background: #B8183252;
        backdrop-filter: blur(30px);
    .container{
        background: transparent;
    }
}

@media only screen and (max-width: 991px){
    padding: 0;
    background: #B8183252;
    backdrop-filter: blur(30px);
    .container{
        background: transparent;
    }
    .header-module{
        .logo{
            gap: 8px;
            .part1{
                width: 40px;
            }
            .part2{
                width: 130px;
            }
        }
        .header-nav{
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 300px;
            z-index: 999;
            background: #5E121E;
            padding: 20px 30px;
            padding-top: 50px;
            transform: translateX(-100%);
            transition: all .2s linear;
            .close{
                display: block;
                position: absolute;
                top: 20px;
                right: 20px;
                cursor: pointer;
                z-index: 1;
            }
            .nav-list{
                flex-direction: column;
                gap: 30px;
                align-items: flex-start;
            }

            &.isSidebar{
                transform: translateX(0);
            }

        }
        .header-action{
            gap: 12px;
            .toggle{
                display: flex;
            }
        }
    }
}

@media only screen and (max-width: 480px){
    .header-module{
        height: 52px;
        .logo{
            .part2{
                display: none;
            }
        }
    }
}
`
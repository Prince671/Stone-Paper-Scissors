
        let cm = document.querySelector(".cm");
        let body = document.querySelector("body");

        let currentmode = "light";
        cm.addEventListener("click", () => {
            if (currentmode === "light") {
                currentmode = "dark";
                body.style.backgroundColor = " black";
                body.style.color = "white";
                cm.innerHTML = '<i class="fa-regular fa-sun"></i>';
            }
            else {
                currentmode = "light";
                body.style.backgroundColor = "white";
                body.style.color = "black";

                cm.innerHTML = '<i class="fa-regular fa-moon"></i>';
            }
        });



        let attempt = 5;
        let att = document.querySelector(".att-left");
        let uscore = 0;
        let cscore = 0;
        let user = document.querySelector(".user-score");
        let comps = document.querySelector(".comp-score");
        let msg = document.querySelector('.mssg');


        const Draw = () => {
            console.log("its draw");
            msg.innerHTML = "<i>Its Draw ! Play Again</i>";
            msg.style.backgroundColor = "rgb(4, 11, 80)";
            attempt = attempt - 1;
            att.innerHTML = attempt;
            gameOver();
        }

        const genComp = () => {
            let option = ["rock", "paper", "scissors"];
            let comchoose = Math.floor(Math.random() * 3);
            // console.log(comchoose);
            return option[comchoose];
        }

        const playGame = (userchoose) => {
            console.log("You Chooeses : ", userchoose);
            let comp = genComp();
            console.log("Comp Chooeses : ", comp);

            if (userchoose === comp) {
                Draw();
            }
            else {
                userwin = true;
                if (userchoose === "rock") {
                    userwin = comp === "paper" ? false : true;
                }
                else if (userchoose === "paper") {
                    userwin = comp === "scissors" ? false : true;
                }
                else {
                    userwin = comp === "rock" ? false : true;
                }
                Showwin();
            }
        }

        const Showwin = () => {
            if (userwin) {
                console.log("you win");
                msg.innerHTML = "<i>Congratulations ! You win</i>";
                msg.style.backgroundColor = "green";
                uscore = uscore + 1;
                user.innerHTML = uscore;
                attempt = attempt - 1;
                att.innerHTML = attempt;
                gameOver();
            }
            else {
                console.log("you loose");
                msg.innerHTML = "<i>Sorry! You loose</i>";
                msg.style.backgroundColor = "red";
                cscore = cscore + 1;
                comps.innerHTML = cscore;
                attempt = attempt - 1;
                att.innerHTML = attempt;
                gameOver();
            }
        }

        let chooses = document.querySelectorAll(".game");
        chooses.forEach((choose) => {

            choose.addEventListener("click", () => {
                let userchoose = choose.id;
                playGame(userchoose);

            })
        })

        const gameOver = () => {
            if (attempt === 0) {
                if (uscore === cscore) {
                    setTimeout(() => {
                        alert("Well Played ! Its Draw");
                    }, 900)
                }
                else if (uscore > cscore) {

                    setTimeout(() => {
                        alert("Congartulation! You Win ");
                    }, 900)
                }
                else {

                    setTimeout(() => {
                        alert("You Loose")
                    }, 900)
                }
                setTimeout(() => {
                    location.reload();
                }, 2000)
            }
        }
  

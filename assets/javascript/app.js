$(document).ready(function () {

    var rightAnswer = 0;
    var wrongAnswer = 0;
    var unanswered = 0;
    var timer = 3;
    var interval;
    var questions = {
        nbaQuestion: [
            question1 = "Who was the first NBA player to win back to back MVPs?",
            nbaChoice1 = "Bill Russel", // Bill Russel is the correct answer with three straight in 1961, 1962 and 1963!
            nbaChoice2 = "Michael Jordan",
            nbaChoice3 = "Magic Johnson",
            nbaChoice4 = "Wilt Chamberlain"
        ],
        nhlQuestion: [
            question2 = "Who is the NHL team that has won the most Stanley Cups?",
            nhlChoice1 = "New York Rangers",
            nhlChoice2 = "Toronto Maple Leafs",
            nhlChoice3 = "Detroit Red Wings",
            nhlChoice4 = "Montreal Canadiens" // Montreal Canadiens is the correct answer with 23 cups total!
        ],
        mlbQuestion: [
            question3 = "Which MLB player has recorded the most home runs in his carreer?",
            mlbChoice1 = "Hank Aaron",
            mlbChoice2 = "Babe Ruth",
            mlbChoice3 = "Barry Bonds", // Barry Bonds is the correct answer with a total of 762 carrer home runs!
            mlbChoice4 = "Alex Rodriguez"
        ],
        nflQuestion: [
            question4 = "In 1966, which NFL team set a regular season record by scoring 72 points in one game?",
            nflChoice1 = "Tampa Bay Buccaneers",
            nflChoice2 = "Washington Redskins", // Washington Redskins is the correct answer!
            nflChoice3 = "New York Giants",
            nflChoice4 = "Cincinnati Bengals"
        ],
        fifaQuestion: [
            question5 = "Who earned the coveted Golden Boot trophy for being the top goal scorer at the FIFA 2014 World Cup?",
            fifaChoice1 = "James Rodriguez - Colombia", // James Rodriguez is the correct answer with a total of 6!
            fifaChoice2 = "Andre Schurrle - Germany",
            fifaChoice3 = "Neymar da Silva Santos Júnior - Brazil",
            fifaChoice4 = "Lionel Messi - Argentina"
        ]


    }
    $("#startBtn").click(function () {
        //changing all tags to the first question 
        $("#startBtn").addClass('d-none');
        $("#btnDiv").removeClass('border');
        $("#timer").removeClass('d-none');
        $("#questionDiv").removeClass('d-none');
        questionOne();
    });
    function questionOne() {
        clearInterval(interval);
        timer = 15;
        var rightAnswer = 0;
        var wrongAnswer = 0;
        var unanswered = 0;
        $("#startBtn").addClass('d-none');
        $("#btnDiv").removeClass('border');
        $("#timer").removeClass('d-none');
        $("#questionDiv").removeClass('d-none');
        $("#choice1").removeClass('d-none');
        $("#choice2").removeClass('d-none');
        $("#choice3").removeClass('d-none');
        $("#choice4").removeClass('d-none');
        $("#questionDiv").text(questions.nbaQuestion[0]);
        $("#choice1").text(questions.nbaQuestion[1]);
        $("#choice2").text(questions.nbaQuestion[2]);
        $("#choice3").text(questions.nbaQuestion[3]);
        $("#choice4").text(questions.nbaQuestion[4]);
        $("#timer").html("<p>Time Remaining: " + timer + "</p>");
        //setting up timer
        interval = setInterval(function () {
            $("#timer").html("<p>Time Remaining: " + timer + "</p>");
            timer--;
            //when user selects his answer
            $('#choice1, #choice2, #choice3, #choice4').click(function () {
                console.log(this);
                //right answer
                if (this.id == 'choice1') {
                    clearInterval(interval);
                    console.log(rightAnswer);
                    $("#questionDiv").text("Correct!");
                    $("#choice1").text("Bill Russel was the first player to win back to back MVPs with three straight in 1961, 1962 and 1963!");
                    $("#choice2").addClass('d-none');
                    $("#choice3").addClass('d-none');
                    $("#choice4").addClass('d-none');
                    console.log(rightAnswer);
                    timer = 3;
                    interval = setInterval(function () {
                        timer--;
                        if (timer == -1) {
                            clearInterval(interval);
                            rightAnswer++;
                            console.log(rightAnswer);
                            questionTwo();
                        }
                    }, 1000)
                }
                // wrong asnwer
                else if (this.id == 'choice2' || this.id == 'choice3' || this.id == 'choice4') {
                    clearInterval(interval);

                    $("#questionDiv").text("Wrong!");
                    $("#choice1").text("The correct answer was Bill Russel with three straight MVPs in 1961, 1962 and 1963!");
                    $("#choice2").addClass('d-none');
                    $("#choice3").addClass('d-none');
                    $("#choice4").addClass('d-none');
                    timer = 3;
                    interval = setInterval(function () {
                        timer--;
                        if (timer == -1) {
                            clearInterval(interval);
                            wrongAnswer++;
                            questionTwo();
                        }
                    }, 1000)
                }
            });
            // if user runs out of time!
            if (timer == -1) {
                clearInterval(interval);
                console.log("TIMES UP!")
                $("#questionDiv").text("Time's Up!");
                $("#choice1").text("Correct answer was Bill Russel");
                $("#choice2").addClass('d-none');
                $("#choice3").addClass('d-none');
                $("#choice4").addClass('d-none');
                timer = 3;
                interval = setInterval(function () {
                    timer--;
                    if (timer == -1) {
                        clearInterval(interval);
                        unanswered++;
                        questionTwo();
                    }
                }, 1000)
            }
        }, 1000);

    }

    function questionTwo() {
        timer = 15;
        $("#choice1").removeClass('d-none');
        $("#choice2").removeClass('d-none');
        $("#choice3").removeClass('d-none');
        $("#choice4").removeClass('d-none');
        $("#timer").html("<p>Time Remaining: " + timer + "</p>");
        $("#questionDiv").text(questions.nhlQuestion[0]);
        $("#choice1").text(questions.nhlQuestion[1]);
        $("#choice2").text(questions.nhlQuestion[2]);
        $("#choice3").text(questions.nhlQuestion[3]);
        $("#choice4").text(questions.nhlQuestion[4]);
        interval = setInterval(function () {
            $("#timer").html("<p>Time Remaining: " + timer + "</p>");
            timer--;
            $('#choice1, #choice2, #choice3, #choice4').click(function () {
                //right answer
                if (this.id == 'choice4') {
                    clearInterval(interval);
                    console.log(rightAnswer);
                    $("#questionDiv").text("Correct!");
                    $("#choice1").text("The Montreal Canadiens are way over every other teams with a total of 23 Stanley Cups with the last one being in 1993!");
                    $("#choice2").addClass('d-none');
                    $("#choice3").addClass('d-none');
                    $("#choice4").addClass('d-none');
                    timer = 3;
                    interval = setInterval(function () {
                        timer--;
                        if (timer == -1) {
                            clearInterval(interval);
                            rightAnswer++;
                            questionThree();
                        }
                    }, 1000)
                }
                // wrong asnwer
                else if (this.id == 'choice1' || this.id == 'choice2' || this.id == 'choice3') {
                    clearInterval(interval);
                    console.log(wrongAnswer);
                    $("#questionDiv").text("Wrong!");
                    $("#choice1").text("The correct answer was the Montreal Canadiens with a total of 23 Stanley Cups");
                    $("#choice2").addClass('d-none');
                    $("#choice3").addClass('d-none');
                    $("#choice4").addClass('d-none');
                    timer = 3;
                    interval = setInterval(function () {
                        timer--;
                        if (timer == -1) {
                            clearInterval(interval);
                            wrongAnswer++;
                            questionThree();
                        }
                    }, 1000)
                }
            });
            // if user runs out of time!
            if (timer == -1) {

                clearInterval(interval);
                console.log("TIMES UP!")
                $("#questionDiv").text("Time's Up!");
                $("#choice1").text("Correct answer was the Montreal Canadiens");
                $("#choice2").addClass('d-none');
                $("#choice3").addClass('d-none');
                $("#choice4").addClass('d-none');
                timer = 3;
                interval = setInterval(function () {
                    timer--;
                    if (timer == -1) {
                        clearInterval(interval);
                        unanswered++;
                        questionThree();
                    }
                }, 1000)
            }
        }, 1000);

    }
    function questionThree() {
        timer = 15;
        $("#choice1").removeClass('d-none');
        $("#choice2").removeClass('d-none');
        $("#choice3").removeClass('d-none');
        $("#choice4").removeClass('d-none');
        $("#timer").html("<p>Time Remaining: " + timer + "</p>");
        $("#questionDiv").text(questions.mlbQuestion[0]);
        $("#choice1").text(questions.mlbQuestion[1]);
        $("#choice2").text(questions.mlbQuestion[2]);
        $("#choice3").text(questions.mlbQuestion[3]);
        $("#choice4").text(questions.mlbQuestion[4]);
        interval = setInterval(function () {
            $("#timer").html("<p>Time Remaining: " + timer + "</p>");
            timer--;
            $('#choice1, #choice2, #choice3, #choice4').click(function () {
                //right answer
                if (this.id == 'choice3') {
                    clearInterval(interval);

                    $("#questionDiv").text("Correct!");
                    $("#choice1").text("Barry Bonds is the current record holder with 762 carreer homeruns!");
                    $("#choice2").addClass('d-none');
                    $("#choice3").addClass('d-none');
                    $("#choice4").addClass('d-none');
                    timer = 3;
                    interval = setInterval(function () {
                        timer--;
                        if (timer == -1) {
                            clearInterval(interval);
                            rightAnswer++;
                            questionFour();
                        }
                    }, 1000)
                }
                // wrong asnwer
                else if (this.id == 'choice1' || this.id == 'choice2' || this.id == 'choice4') {
                    clearInterval(interval);

                    console.log(wrongAnswer);
                    $("#questionDiv").text("Wrong!");
                    $("#choice1").text("The correct answer was Barry Bonds with  762 carreer home runs!");
                    $("#choice2").addClass('d-none');
                    $("#choice3").addClass('d-none');
                    $("#choice4").addClass('d-none');
                    timer = 3;
                    interval = setInterval(function () {
                        timer--;
                        if (timer == -1) {
                            clearInterval(interval);
                            wrongAnswer++;
                            questionFour();
                        }
                    }, 1000)
                }
            });
            // if user runs out of time!
            if (timer == -1) {

                clearInterval(interval);
                console.log("TIMES UP!")
                $("#questionDiv").text("Time's Up!");
                $("#choice1").text("Correct answer was Barry Bonds");
                $("#choice2").addClass('d-none');
                $("#choice3").addClass('d-none');
                $("#choice4").addClass('d-none');
                timer = 3;
                interval = setInterval(function () {
                    timer--;
                    if (timer == -1) {
                        clearInterval(interval);
                        unanswered++;
                        questionFour();
                    }
                }, 1000)
            }
        }, 1000);

    }
    function questionFour() {
        timer = 15;
        $("#choice1").removeClass('d-none');
        $("#choice2").removeClass('d-none');
        $("#choice3").removeClass('d-none');
        $("#choice4").removeClass('d-none');
        $("#timer").html("<p>Time Remaining: " + timer + "</p>");
        $("#questionDiv").text(questions.nflQuestion[0]);
        $("#choice1").text(questions.nflQuestion[1]);
        $("#choice2").text(questions.nflQuestion[2]);
        $("#choice3").text(questions.nflQuestion[3]);
        $("#choice4").text(questions.nflQuestion[4]);
        interval = setInterval(function () {
            $("#timer").html("<p>Time Remaining: " + timer + "</p>");
            timer--;
            $('#choice1, #choice2, #choice3, #choice4').click(function () {
                //right answer
                if (this.id == 'choice2') {
                    clearInterval(interval);

                    $("#questionDiv").text("Correct!");
                    $("#choice1").text("The Washington Redskins is the correct answer with the record of 72 points in one game!");
                    $("#choice2").addClass('d-none');
                    $("#choice3").addClass('d-none');
                    $("#choice4").addClass('d-none');
                    timer = 3;
                    interval = setInterval(function () {
                        timer--;
                        if (timer == -1) {
                            clearInterval(interval);
                            rightAnswer++;
                            questionFive();
                        }
                    }, 1000)
                }
                // wrong asnwer
                else if (this.id == 'choice1' || this.id == 'choice3' || this.id == 'choice4') {
                    clearInterval(interval);

                    $("#questionDiv").text("Wrong!");
                    $("#choice1").text("The correct answer was the Washington Redskins with 72 points in a single game!");
                    $("#choice2").addClass('d-none');
                    $("#choice3").addClass('d-none');
                    $("#choice4").addClass('d-none');
                    timer = 3;
                    interval = setInterval(function () {
                        timer--;
                        if (timer == -1) {
                            clearInterval(interval);
                            wrongAnswer++;
                            questionFive();
                        }
                    }, 1000)
                }
            });
            // if user runs out of time!
            if (timer == -1) {

                clearInterval(interval);
                console.log("TIMES UP!")
                $("#questionDiv").text("Time's Up!");
                $("#choice1").text("Correct answer was the Washington Redskins");
                $("#choice2").addClass('d-none');
                $("#choice3").addClass('d-none');
                $("#choice4").addClass('d-none');
                timer = 3;
                interval = setInterval(function () {
                    timer--;
                    if (timer == -1) {
                        clearInterval(interval);
                        unanswered++;
                        questionFive();
                    }
                }, 1000)
            }
        }, 1000);

    }
    function questionFive() {
        timer = 15;
        $("#choice1").removeClass('d-none');
        $("#choice2").removeClass('d-none');
        $("#choice3").removeClass('d-none');
        $("#choice4").removeClass('d-none');
        $("#timer").html("<p>Time Remaining: " + timer + "</p>");
        $("#questionDiv").text(questions.fifaQuestion[0]);
        $("#choice1").text(questions.fifaQuestion[1]);
        $("#choice2").text(questions.fifaQuestion[2]);
        $("#choice3").text(questions.fifaQuestion[3]);
        $("#choice4").text(questions.fifaQuestion[4]);
        interval = setInterval(function () {
            $("#timer").html("<p>Time Remaining: " + timer + "</p>");
            timer--;
            $('#choice1, #choice2, #choice3, #choice4').click(function () {
                //right answer
                if (this.id == 'choice1') {
                    clearInterval(interval);

                    $("#questionDiv").text("Correct!");
                    $("#choice1").text("James Rodriguez won the Golden Boot by scoring 6 goals in the 2014 Wolrd Cup");
                    $("#choice2").addClass('d-none');
                    $("#choice3").addClass('d-none');
                    $("#choice4").addClass('d-none');
                    timer = 3;
                    interval = setInterval(function () {
                        timer--;
                        if (timer == -1) {
                            clearInterval(interval);
                            rightAnswer++;
                            results();
                        }
                    }, 1000)
                }
                // wrong asnwer
                else if (this.id == 'choice2' || this.id == 'choice3' || this.id == 'choice4') {
                    clearInterval(interval);

                    $("#questionDiv").text("Wrong!");
                    $("#choice1").text("The correct answer was James Rodriguez with a total of 6 goals!");
                    $("#choice2").addClass('d-none');
                    $("#choice3").addClass('d-none');
                    $("#choice4").addClass('d-none');
                    timer = 3;
                    interval = setInterval(function () {
                        timer--;
                        if (timer == -1) {
                            clearInterval(interval);
                            wrongAnswer++;
                            results();
                        }
                    }, 1000)
                }
            });
            // if user runs out of time!
            if (timer == -1) {

                clearInterval(interval);
                console.log("TIMES UP!")
                $("#questionDiv").text("Time's Up!");
                $("#choice1").text("The correct answer was James Rodriguez");
                $("#choice2").addClass('d-none');
                $("#choice3").addClass('d-none');
                $("#choice4").addClass('d-none');
                unanswered++;
                timer = 3;
                interval = setInterval(function () {
                    timer--;
                    if (timer == -1) {
                        clearInterval(interval);

                        results();
                    }
                }, 1000)
            }
        }, 1000);

    }
    function results() {

        $("#choice1").removeClass('d-none');
        $("#choice2").removeClass('d-none');
        $("#choice3").removeClass('d-none');
        $("#choice4").removeClass('d-none');
        $("#timer").addClass('d-none');
        $("#questionDiv").text("The results are in!");
        $("#choice1").text("Right Answers: " + rightAnswer);
        $("#choice2").text("Wrong Answers: " + wrongAnswer);
        $("#choice3").text("Unanswered Questions: " + unanswered);
        $("#choice4").text("Play Again");

        $("#choice4").click(function () {
            questionOne();
        });

    }
});


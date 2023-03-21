<script>
        // Create the balls
    const redBall = createBall("red");
    const blueBall = createBall("blue");
    const greenBall = createBall("green");

    // Add the balls to their containers
    document.getElementById("red-ball-container").appendChild(redBall);
    document.getElementById("blue-ball-container").appendChild(blueBall);
    document.getElementById("green-ball-container").appendChild(greenBall);

        // Add click event listeners to the buttons
        document.getElementById("red-ball-button").addEventListener("click", () => {
        document.getElementById("red-ball-container").removeChild(redBall);
        });

        document.getElementById("blue-ball-button").addEventListener("click", () => {
        document.getElementById("blue-ball-container").removeChild(blueBall);
        });

        document.getElementById("green-ball-button").addEventListener("click", () => {
        document.getElementById("green-ball-container").removeChild(greenBall);
        });


</script>
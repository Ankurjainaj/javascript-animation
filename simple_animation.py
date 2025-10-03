import turtle
import time

# Setup screen
screen = turtle.Screen()
screen.bgcolor("black")
screen.title("Simple Python Animation")

# Create turtle
ball = turtle.Turtle()
ball.shape("circle")
ball.color("cyan")
ball.penup()
ball.speed(0)

# Movement variables
dx, dy = 2, 2

# Animate
for _ in range(200):  # number of frames
    x, y = ball.xcor(), ball.ycor()

    # Bounce from edges
    if x > 290 or x < -290:
        dx *= -1
    if y > 290 or y < -290:
        dy *= -1

    ball.setx(x + dx)
    ball.sety(y + dy)

    time.sleep(0.01)

turtle.done()

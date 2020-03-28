v = int(input())
t = int(input())
l = 0
if v > 0:
    l = (v * t) % 109
else:
    l = (109 - (abs(v * t) % 109))
print(l)

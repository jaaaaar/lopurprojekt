from flask import Flask, request, jsonify
from datetime import datetime, timedelta

app = Flask(__name__)

CYCLE_LENGTH = 28  # päevade vahe tsüklite vahel

@app.route("/api/predict", methods=["POST"])
def predict():
    data = request.json

    last_start = datetime.strptime(
        data["last_period_start"], "%Y-%m-%d"
    )
    period_length = int(data["period_length"])

    # 1. viimaste päevade lõpp
    last_end = last_start + timedelta(days=period_length)

    # 2. järgmiste päevade algus = lõpp + 28
    next_start = last_end + timedelta(days=CYCLE_LENGTH)

    # 3. järgmiste päevade lõpp
    next_end = next_start + timedelta(days=period_length)

    return jsonify({
        "last_end": last_end.strftime("%Y-%m-%d"),
        "next_start": next_start.strftime("%Y-%m-%d"),
        "next_end": next_end.strftime("%Y-%m-%d"),
        "period_length": period_length
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

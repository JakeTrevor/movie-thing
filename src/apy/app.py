from typing import List
from fastapi import FastAPI, Request


from src.apy.borda import aggregate_borda
from src.apy.instance import sql_repo, aggregator

app = FastAPI()

app.state.sql_repo = sql_repo
app.state.aggregator = aggregator


@app.get("/apy")
def hello_world():
    return {"message": "Hello World"}


@app.get("/aggregate/{clubName}")
def aggregate(clubName: str, request: Request):
    data = request.app.state.sql_repo.get_club_ranks(clubName)
    results = aggregate_borda(data)
    print(results)
    return "bla"
    # return request.app.state.sql_repo.write_results(results)


@app.get("/clubmembers/{clubName}")
def get_club_members(clubName: str, request: Request) -> List[str]:
    return request.app.state.sql_repo.get_club_members(clubName)

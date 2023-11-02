import axios from "axios"

const ChessProfile = await axios({
    method: 'get',
    url: "https://api.chess.com/pub/player/craftmachin",
    params: {}
});

const ChessStats = await axios({
    method: 'get',
    url: "https://api.chess.com/pub/player/craftmachin/stats",
    params: {}
});

const ChessMe = {
    ChessProfile,
    ChessStats
}

export default ChessMe
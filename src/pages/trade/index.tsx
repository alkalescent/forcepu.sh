import { Typography, Table } from "antd";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
const { Title } = Typography;
import { getApiUrl, Toggle } from "@/utils";

const TradePage = () => {

  const { user: loggedIn } = useAuthenticator((context) => [context.user]);
  let [portfolio, setPortfolio] = useState([]);
  const [toggle, setToggle] = useState(false);
  const toggleLabels = { OPTIONS: "OPT", STOCKS: "STX" };

  portfolio = [
    {
        "price": "191.499900",
        "quantity": "100.12666900",
        "average_buy_price": "179.8660",
        "equity": "19174.25",
        "percent_change": "6.47",
        "intraday_percent_change": "0.00",
        "equity_change": "1164.863654",
        "type": "stock",
        "name": "Apple",
        "id": "450dfc6d-5510-4d40-abfb-f633b7d9be3e",
        "pe_ratio": "30.924400",
        "percentage": "4.85",
        "symbol": "AAPL",
        "open_contracts": -1,
        "expiration": "2023-12-29",
        "strike": 200.0,
        "chance": 0.823119,
        "key": 0
    },
    {
        "price": "129.680000",
        "quantity": "5.00000000",
        "average_buy_price": "127.5180",
        "equity": "648.40",
        "percent_change": "1.70",
        "intraday_percent_change": "0.00",
        "equity_change": "10.810000",
        "type": "stock",
        "name": "Airbnb",
        "id": "f1c1cfe5-c598-4499-9182-818eee5a9c1b",
        "pe_ratio": "15.401700",
        "percentage": "0.16",
        "symbol": "ABNB",
        "open_contracts": 0,
        "key": 1
    },
    {
        "price": "612.920000",
        "quantity": "11.50000000",
        "average_buy_price": "599.7435",
        "equity": "7048.58",
        "percent_change": "2.20",
        "intraday_percent_change": "0.00",
        "equity_change": "151.529750",
        "type": "stock",
        "name": "Adobe",
        "id": "809adc21-ef75-4c3d-9c0e-5f9a167f235b",
        "pe_ratio": "54.232600",
        "percentage": "1.78",
        "symbol": "ADBE",
        "open_contracts": 0,
        "key": 2
    },
    {
        "price": "121.505000",
        "quantity": "100.00000000",
        "average_buy_price": "109.9602",
        "equity": "12150.50",
        "percent_change": "10.50",
        "intraday_percent_change": "0.00",
        "equity_change": "1154.480000",
        "type": "stock",
        "name": "AMD",
        "id": "940fc3f5-1db5-4fed-b452-f3a2e4562b5f",
        "pe_ratio": "951.262000",
        "percentage": "3.07",
        "symbol": "AMD",
        "open_contracts": -1,
        "expiration": "2023-12-15",
        "strike": 130.0,
        "chance": 0.791199,
        "key": 3
    },
    {
        "price": "146.050000",
        "quantity": "100.00000000",
        "average_buy_price": "120.0000",
        "equity": "14605.00",
        "percent_change": "21.71",
        "intraday_percent_change": "0.00",
        "equity_change": "2605.000000",
        "type": "stock",
        "name": "Amazon",
        "id": "c0bb3aec-bd1e-471e-a4f0-ca011cbec711",
        "pe_ratio": "75.804100",
        "percentage": "3.69",
        "symbol": "AMZN",
        "open_contracts": -1,
        "expiration": "2025-01-17",
        "strike": 150.0,
        "chance": 0.682834,
        "key": 4
    },
    {
        "price": "58.871200",
        "quantity": "100.00000000",
        "average_buy_price": "58.1847",
        "equity": "5887.12",
        "percent_change": "1.18",
        "intraday_percent_change": "0.00",
        "equity_change": "68.650000",
        "type": "adr",
        "name": "Arm Holdings plc",
        "id": "185d1287-967e-481a-92b9-cd801572b58e",
        "pe_ratio": "107.676000",
        "percentage": "1.49",
        "symbol": "ARM",
        "open_contracts": -1,
        "expiration": "2025-01-17",
        "strike": 80.0,
        "chance": 0.825123,
        "key": 5
    },
    {
        "price": "720.800000",
        "quantity": "4.00000000",
        "average_buy_price": "687.3500",
        "equity": "2883.20",
        "percent_change": "4.87",
        "intraday_percent_change": "0.14",
        "equity_change": "133.800000",
        "type": "stock",
        "name": "BlackRock",
        "id": "c5435e0e-02b0-434f-9717-b13b68ae82d1",
        "pe_ratio": "20.105100",
        "percentage": "0.73",
        "symbol": "BLK",
        "open_contracts": 0,
        "key": 6
    },
    {
        "price": "25.940000",
        "quantity": "100.00000000",
        "average_buy_price": "35.0000",
        "equity": "2594.00",
        "percent_change": "-25.89",
        "intraday_percent_change": "0.00",
        "equity_change": "-906.000000",
        "type": "stock",
        "name": "Instacart (Maplebear Inc.)",
        "id": "c3428303-869b-4a54-a5c2-704015441d17",
        "pe_ratio": "-3.800000",
        "percentage": "0.66",
        "symbol": "CART",
        "open_contracts": -1,
        "expiration": "2023-11-24",
        "strike": 26.5,
        "chance": 0.767182,
        "key": 7
    },
    {
        "price": "33.965000",
        "quantity": "100.00000000",
        "average_buy_price": "32.9300",
        "equity": "3396.50",
        "percent_change": "3.14",
        "intraday_percent_change": "0.00",
        "equity_change": "103.500000",
        "type": "stock",
        "name": "CAVA",
        "id": "14e9a799-c117-4373-8895-0341bf9165f2",
        "pe_ratio": "-482.600000",
        "percentage": "0.86",
        "symbol": "CAVA",
        "open_contracts": -1,
        "expiration": "2024-12-20",
        "strike": 55.0,
        "chance": 0.869893,
        "key": 8
    },
    {
        "price": "2186.199900",
        "quantity": "3.25000000",
        "average_buy_price": "2122.1938",
        "equity": "7105.15",
        "percent_change": "3.02",
        "intraday_percent_change": "0.32",
        "equity_change": "208.019825",
        "type": "stock",
        "name": "Chipotle",
        "id": "da53f1f6-29b2-4d20-bb4e-05da9d508259",
        "pe_ratio": "51.300900",
        "percentage": "1.80",
        "symbol": "CMG",
        "open_contracts": 0,
        "key": 9
    },
    {
        "price": "105.665000",
        "quantity": "100.00000000",
        "average_buy_price": "59.5300",
        "equity": "10566.50",
        "percent_change": "77.50",
        "intraday_percent_change": "0.00",
        "equity_change": "4613.500000",
        "type": "stock",
        "name": "Coinbase",
        "id": "aedbcff3-1e3c-469b-9594-44cffed43404",
        "pe_ratio": "-30.700000",
        "percentage": "2.67",
        "symbol": "COIN",
        "open_contracts": -1,
        "expiration": "2024-01-19",
        "strike": 110.0,
        "chance": 0.715788,
        "key": 10
    },
    {
        "price": "580.730000",
        "quantity": "2.00176200",
        "average_buy_price": "580.9182",
        "equity": "1162.48",
        "percent_change": "-0.03",
        "intraday_percent_change": "0.32",
        "equity_change": "-0.376732",
        "type": "stock",
        "name": "Costco",
        "id": "ec89803c-c5e5-4df1-889c-da4f8cb6f8cd",
        "pe_ratio": "40.768400",
        "percentage": "0.29",
        "symbol": "COST",
        "open_contracts": 0,
        "key": 11
    },
    {
        "price": "71.930000",
        "quantity": "100.00000000",
        "average_buy_price": "53.3500",
        "equity": "7193.00",
        "percent_change": "34.83",
        "intraday_percent_change": "0.00",
        "equity_change": "1858.000000",
        "type": "stock",
        "name": "CRISPR",
        "id": "d5b60f04-4b46-465c-b954-e9ecc9afa51a",
        "pe_ratio": "-15.150000",
        "percentage": "1.82",
        "symbol": "CRSP",
        "open_contracts": -1,
        "expiration": "2025-01-17",
        "strike": 90.0,
        "chance": 0.790688,
        "key": 12
    },
    {
        "price": "144.720000",
        "quantity": "2.00000000",
        "average_buy_price": "156.6700",
        "equity": "289.44",
        "percent_change": "-7.63",
        "intraday_percent_change": "0.00",
        "equity_change": "-23.900000",
        "type": "stock",
        "name": "Chevron",
        "id": "7a6a30e2-cf4d-40dd-8baa-0cea48de85e4",
        "pe_ratio": "10.741300",
        "percentage": "0.07",
        "symbol": "CVX",
        "open_contracts": 0,
        "key": 13
    },
    {
        "price": "10.375000",
        "quantity": "102.46008800",
        "average_buy_price": "14.6514",
        "equity": "1063.02",
        "percent_change": "-29.19",
        "intraday_percent_change": "0.00",
        "equity_change": "-438.160320",
        "type": "stock",
        "name": "Ford Motor",
        "id": "6df56bd0-0bf2-44ab-8875-f94fd8526942",
        "pe_ratio": "6.734430",
        "percentage": "0.27",
        "symbol": "F",
        "open_contracts": -1,
        "expiration": "2023-12-15",
        "strike": 11.0,
        "chance": 0.814408,
        "key": 14
    },
    {
        "price": "136.080000",
        "quantity": "100.00000000",
        "average_buy_price": "99.8430",
        "equity": "13608.00",
        "percent_change": "36.29",
        "intraday_percent_change": "0.00",
        "equity_change": "3623.700000",
        "type": "stock",
        "name": "Alphabet Class A",
        "id": "54db869e-f7d5-45fb-88f1-8d7072d4c8b2",
        "pe_ratio": "25.941800",
        "percentage": "3.44",
        "symbol": "GOOGL",
        "open_contracts": -1,
        "expiration": "2025-06-20",
        "strike": 175.0,
        "chance": 0.797504,
        "key": 15
    },
    {
        "price": "44.795000",
        "quantity": "100.00000000",
        "average_buy_price": "32.9862",
        "equity": "4479.50",
        "percent_change": "35.80",
        "intraday_percent_change": "0.00",
        "equity_change": "1180.880000",
        "type": "stock",
        "name": "Intel",
        "id": "ad059c69-0c1c-4c6b-8322-f53f1bbd69d4",
        "pe_ratio": "-109.140000",
        "percentage": "1.13",
        "symbol": "INTC",
        "open_contracts": -1,
        "expiration": "2024-06-21",
        "strike": 50.0,
        "chance": 0.749881,
        "key": 16
    },
    {
        "price": "153.285000",
        "quantity": "103.66020200",
        "average_buy_price": "166.0581",
        "equity": "15889.55",
        "percent_change": "-7.69",
        "intraday_percent_change": "0.00",
        "equity_change": "-1324.062126",
        "type": "stock",
        "name": "JPMorgan Chase",
        "id": "43c1172a-9130-420a-ac9b-b01a6ff5dd54",
        "pe_ratio": "9.122490",
        "percentage": "4.02",
        "symbol": "JPM",
        "open_contracts": -1,
        "expiration": "2024-01-19",
        "strike": 170.0,
        "chance": 0.935243,
        "key": 17
    },
    {
        "price": "279.205000",
        "quantity": "100.00000000",
        "average_buy_price": "260.7454",
        "equity": "27920.50",
        "percent_change": "7.08",
        "intraday_percent_change": "0.00",
        "equity_change": "1845.960000",
        "type": "stock",
        "name": "McDonald's",
        "id": "41eac3c6-f7f7-4c4a-b696-ab9d1b913981",
        "pe_ratio": "24.294700",
        "percentage": "7.06",
        "symbol": "MCD",
        "open_contracts": -1,
        "expiration": "2024-01-19",
        "strike": 290.0,
        "chance": 0.794988,
        "key": 18
    },
    {
        "price": "339.260000",
        "quantity": "100.00000000",
        "average_buy_price": "319.3278",
        "equity": "33926.00",
        "percent_change": "6.24",
        "intraday_percent_change": "0.00",
        "equity_change": "1993.220000",
        "type": "stock",
        "name": "Meta Platforms",
        "id": "ebab2398-028d-4939-9f1d-13bf38f81c50",
        "pe_ratio": "29.574400",
        "percentage": "8.57",
        "symbol": "META",
        "open_contracts": -1,
        "expiration": "2024-06-21",
        "strike": 190.0,
        "chance": 0.56564,
        "key": 19
    },
    {
        "price": "79.790000",
        "quantity": "20.05349900",
        "average_buy_price": "77.9340",
        "equity": "1600.07",
        "percent_change": "2.38",
        "intraday_percent_change": "-0.25",
        "equity_change": "37.219294",
        "type": "stock",
        "name": "Morgan Stanley",
        "id": "75f435f0-0d44-44a4-bd14-ac2eba5badea",
        "pe_ratio": "14.382700",
        "percentage": "0.40",
        "symbol": "MS",
        "open_contracts": 0,
        "key": 20
    },
    {
        "price": "377.560000",
        "quantity": "101.20073300",
        "average_buy_price": "327.4240",
        "equity": "38209.35",
        "percent_change": "15.31",
        "intraday_percent_change": "0.00",
        "equity_change": "5073.799950",
        "type": "stock",
        "name": "Microsoft",
        "id": "50810c35-d215-4866-9758-0ada4ac79ffa",
        "pe_ratio": "35.817000",
        "percentage": "9.65",
        "symbol": "MSFT",
        "open_contracts": -1,
        "expiration": "2024-06-21",
        "strike": 360.0,
        "chance": 0.613332,
        "key": 21
    },
    {
        "price": "32.547500",
        "quantity": "100.00000000",
        "average_buy_price": "151.0033",
        "equity": "3254.75",
        "percent_change": "-78.45",
        "intraday_percent_change": "0.00",
        "equity_change": "-11845.580000",
        "type": "stock",
        "name": "Match",
        "id": "8886c92c-7bbe-4014-994a-6509bb3b0009",
        "pe_ratio": "18.447100",
        "percentage": "0.82",
        "symbol": "MTCH",
        "open_contracts": -1,
        "expiration": "2025-01-17",
        "strike": 60.0,
        "chance": 0.931109,
        "key": 22
    },
    {
        "price": "72.810000",
        "quantity": "5.00000000",
        "average_buy_price": "72.6180",
        "equity": "364.05",
        "percent_change": "0.26",
        "intraday_percent_change": "0.00",
        "equity_change": "0.960000",
        "type": "stock",
        "name": "Cloudflare",
        "id": "9722f34e-b765-410d-9d42-06d30b3ebe70",
        "pe_ratio": "-119.220000",
        "percentage": "0.09",
        "symbol": "NET",
        "open_contracts": 0,
        "key": 23
    },
    {
        "price": "474.650000",
        "quantity": "100.00000000",
        "average_buy_price": "691.0000",
        "equity": "47465.00",
        "percent_change": "-31.31",
        "intraday_percent_change": "0.00",
        "equity_change": "-21635.000000",
        "type": "stock",
        "name": "Netflix",
        "id": "81733743-965a-4d93-b87a-6973cb9efd34",
        "pe_ratio": "46.456300",
        "percentage": "11.99",
        "symbol": "NFLX",
        "open_contracts": -1,
        "expiration": "2024-06-21",
        "strike": 640.0,
        "chance": 0.894866,
        "key": 24
    },
    {
        "price": "504.020000",
        "quantity": "100.12069200",
        "average_buy_price": "222.4398",
        "equity": "50462.83",
        "percent_change": "126.59",
        "intraday_percent_change": "0.00",
        "equity_change": "28192.004477",
        "type": "stock",
        "name": "NVIDIA",
        "id": "a4ecd608-e7b4-4ff3-afa5-f77ae7632dfb",
        "pe_ratio": "119.089000",
        "percentage": "12.75",
        "symbol": "NVDA",
        "open_contracts": -1,
        "expiration": "2025-12-19",
        "strike": 450.0,
        "chance": 0.689844,
        "key": 25
    },
    {
        "price": "53.230000",
        "quantity": "100.07257600",
        "average_buy_price": "51.4140",
        "equity": "5326.86",
        "percent_change": "3.53",
        "intraday_percent_change": "0.00",
        "equity_change": "181.731798",
        "type": "reit",
        "name": "Realty Income",
        "id": "8118ec86-3d0b-46f2-a025-f362a3616440",
        "pe_ratio": "40.186800",
        "percentage": "1.35",
        "symbol": "O",
        "open_contracts": -1,
        "expiration": "2023-12-15",
        "strike": 55.0,
        "chance": 0.826637,
        "key": 26
    },
    {
        "price": "71.827500",
        "quantity": "100.00000000",
        "average_buy_price": "69.8753",
        "equity": "7182.75",
        "percent_change": "2.79",
        "intraday_percent_change": "0.00",
        "equity_change": "195.220000",
        "type": "stock",
        "name": "Okta",
        "id": "d57904fb-55fe-4e2b-97f7-34ef2e0729ec",
        "pe_ratio": "-19.020000",
        "percentage": "1.81",
        "symbol": "OKTA",
        "open_contracts": -1,
        "expiration": "2023-11-24",
        "strike": 75.0,
        "chance": 0.890144,
        "key": 27
    },
    {
        "price": "21.353100",
        "quantity": "100.00000000",
        "average_buy_price": "25.2485",
        "equity": "2135.31",
        "percent_change": "-15.43",
        "intraday_percent_change": "0.00",
        "equity_change": "-389.540000",
        "type": "stock",
        "name": "Palantir Technologies",
        "id": "f90de184-4f73-4aad-9a5f-407858013eb1",
        "pe_ratio": "316.692000",
        "percentage": "0.54",
        "symbol": "PLTR",
        "open_contracts": -1,
        "expiration": "2024-01-19",
        "strike": 13.0,
        "chance": 0.565497,
        "key": 28
    },
    {
        "price": "3.875000",
        "quantity": "100.00000000",
        "average_buy_price": "26.0400",
        "equity": "387.50",
        "percent_change": "-85.12",
        "intraday_percent_change": "0.00",
        "equity_change": "-2216.500000",
        "type": "stock",
        "name": "Plug Power",
        "id": "ef99a2c4-adb2-4163-a2df-2d5722cc75b7",
        "pe_ratio": "-2.500000",
        "percentage": "0.10",
        "symbol": "PLUG",
        "open_contracts": -1,
        "expiration": "2023-12-15",
        "strike": 10.0,
        "chance": 0.993512,
        "key": 29
    },
    {
        "price": "390.695000",
        "quantity": "100.28330300",
        "average_buy_price": "386.7546",
        "equity": "39180.19",
        "percent_change": "1.02",
        "intraday_percent_change": "0.00",
        "equity_change": "395.156327",
        "type": "etp",
        "name": "Invesco QQQ",
        "id": "1790dd4f-a7ff-409e-90de-cad5efafde10",
        "pe_ratio": "31.941070",
        "percentage": "9.90",
        "symbol": "QQQ",
        "open_contracts": -1,
        "expiration": "2025-01-17",
        "strike": 380.0,
        "chance": 0.612492,
        "key": 30
    },
    {
        "price": "79.360000",
        "quantity": "10.00000000",
        "average_buy_price": "77.8370",
        "equity": "793.60",
        "percent_change": "1.96",
        "intraday_percent_change": "0.00",
        "equity_change": "15.230000",
        "type": "stock",
        "name": "RTX Corporation",
        "id": "1de794e3-c447-4125-b3d9-6bcb4895444c",
        "pe_ratio": "36.983100",
        "percentage": "0.20",
        "symbol": "RTX",
        "open_contracts": 0,
        "key": 31
    },
    {
        "price": "179.905000",
        "quantity": "100.00000000",
        "average_buy_price": "164.9571",
        "equity": "17990.50",
        "percent_change": "9.06",
        "intraday_percent_change": "0.00",
        "equity_change": "1494.790000",
        "type": "stock",
        "name": "Spotify",
        "id": "9c53326c-d07e-4b82-82d2-b108ec5d9530",
        "pe_ratio": "-44.010000",
        "percentage": "4.55",
        "symbol": "SPOT",
        "open_contracts": -1,
        "expiration": "2025-01-17",
        "strike": 165.0,
        "chance": 0.665311,
        "key": 32
    },
    {
        "price": "59.235000",
        "quantity": "100.00000000",
        "average_buy_price": "70.0150",
        "equity": "5923.50",
        "percent_change": "-15.40",
        "intraday_percent_change": "0.00",
        "equity_change": "-1078.000000",
        "type": "stock",
        "name": "Block",
        "id": "f3acdd2f-6580-4c75-a69c-81481cc4c235",
        "pe_ratio": "-124.520000",
        "percentage": "1.50",
        "symbol": "SQ",
        "open_contracts": -1,
        "expiration": "2025-01-17",
        "strike": 85.0,
        "chance": 0.836478,
        "key": 33
    },
    {
        "price": "186.150000",
        "quantity": "100.00000000",
        "average_buy_price": "385.0185",
        "equity": "18615.00",
        "percent_change": "-51.65",
        "intraday_percent_change": "0.00",
        "equity_change": "-19886.850000",
        "type": "stock",
        "name": "Atlassian Corporation",
        "id": "6fb80910-6286-4848-a847-2098dc5ab6fa",
        "pe_ratio": "-93.960000",
        "percentage": "4.70",
        "symbol": "TEAM",
        "open_contracts": -1,
        "expiration": "2025-01-17",
        "strike": 270.0,
        "chance": 0.847074,
        "key": 34
    },
    {
        "price": "235.880000",
        "quantity": "100.00000000",
        "average_buy_price": "121.9989",
        "equity": "23588.00",
        "percent_change": "93.35",
        "intraday_percent_change": "0.00",
        "equity_change": "11388.110000",
        "type": "stock",
        "name": "Tesla",
        "id": "e39ed23a-7bd1-4587-b060-71988d9ef483",
        "pe_ratio": "75.446800",
        "percentage": "5.96",
        "symbol": "TSLA",
        "open_contracts": -1,
        "expiration": "2023-12-15",
        "strike": 300.0,
        "chance": 0.966518,
        "key": 35
    },
    {
        "price": "104.695000",
        "quantity": "2.00000000",
        "average_buy_price": "108.3430",
        "equity": "209.39",
        "percent_change": "-3.37",
        "intraday_percent_change": "0.00",
        "equity_change": "-7.296000",
        "type": "stock",
        "name": "Exxon Mobil",
        "id": "9133b38b-4917-4b5a-8eab-c029d60f9912",
        "pe_ratio": "10.434300",
        "percentage": "0.05",
        "symbol": "XOM",
        "open_contracts": 0,
        "key": 36
    }
];

  const format = (prefix='', suffix='', mult=1, color=(_: any) => 'inherit', arrow=false) => (toRound: string) => {
    let num = parseFloat(toRound) * mult;
    return (
    <>
      <span style={{color: color(num)}}>{`${prefix}${num % 1 ? num.toFixed(2) : num}${suffix}`}</span>
      <span style={{color: num >= 0 ? 'cyan' : 'magenta'}}>{arrow && (num >= 0 ? ' ▲' : ' ▼') || ''}</span>
    </>);
  }
  
  const createColumn = ({dataName='', displayName='', render=(s: string) => s, sort=''}) => (
    Object.assign({ 
      title: (displayName || dataName).toLowerCase().replace(/(^| )(\w)/g, (s: string) => s.toUpperCase()), 
      dataIndex: dataName, 
      key: dataName, 
      render
    }, sort ? {
      defaultSortOrder: dataName === 'expiration' ? 'ascend' : '',
      // defaultSortOrder: sort,
      sorter: (a: { [x: string]: any; }, b: { [x: string]: any; }) => {
        let x = a[dataName];
        let y = b[dataName]
        if (dataName === 'expiration') {
          x = Date.parse(x);
          y = Date.parse(y);
        }
        return x - y;
      }
    } : {}));
  const columns = toggle ? [
    createColumn({dataName: 'symbol'}), 
    createColumn({dataName: 'quantity', render: format()}),
    createColumn({dataName: 'price', render: format('$')}),
    // add sort
    createColumn({dataName: 'percent_change', displayName: 'Delta', 
      render: format(
        '', 
        '%', 
        1, 
        (num) => num >= 0 ? 'cyan' : 'magenta',
        // or
        // () => 'inherit',
        true
      )
      }),
    // form pie chart from percentage and sort by percentage?
    createColumn({dataName: 'percentage', render: format('', '%')})
  ] : [
    createColumn({dataName: 'symbol'}), 
    createColumn({dataName: 'open_contracts', displayName: 'Contracts'}),
    createColumn({dataName: 'strike', render: format('$')}),
    createColumn({dataName: 'chance', render: format('', '%', 100, (num) => num >= 80 ? 'cyan' : 'magenta'), sort: true}),
    // Object.assign(createColumn('expiration'), {
    //   defaultSortOrder: 'descend',
    //   sorter: (a, b) => a.expiration < b.expiration,
    // })
    createColumn({dataName: 'expiration', sort: 'ascend'})
    // add col for sell vs roll
    // add chart for premium income per week
  ]


  useEffect(() => {
    if (loggedIn) {
      (async () => {
        const jwtToken = loggedIn?.signInUserSession?.idToken?.jwtToken;
        const url = `${getApiUrl({ localOverride: "dev" })}/trade`;
        const response = await fetch(url, { method: "GET", headers: { Authorization: jwtToken } });
        const data = await response.json();
        setPortfolio(data);
      })();
    }
  }, [loggedIn]);




// Goal:
// table w symbols
// number of options (should be done), date (should be done), strike price (should be done), chance of profit (should be done), sell (magenta) and roll (cyan) buttons
// execute (magenta) button executes strategy for all assets
// graph of covered call income over time
// +$20 premium notification after each sell order
// total + for the week, filter sum to include filled orders after start of day Mon


  return (
  <>
  <Title>Portfolio</Title>
  <span style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
    <Toggle
      val={toggle}
      options={[toggleLabels.STOCKS, toggleLabels.OPTIONS]}
      defaultValue={toggleLabels.OPTIONS}
      onChange={(val: string) => setToggle(val === toggleLabels.STOCKS)}
    />
  </span>
  <Table dataSource={toggle ? portfolio : portfolio.filter(holding => parseFloat(holding?.quantity) >= 100)} columns={columns} />
  {/* {Object.keys(portfolio).map(symbol => )} */}
  </>
  );
};

TradePage.displayName = "Trade";

export default TradePage;

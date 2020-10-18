import { Candle } from '../interfaces/Candle';

export default class PrimaryCandle implements Candle {
    _churchId: string;
    _price?: number;

    constructor(churchId: string, price?: number) {
        this._churchId = churchId;
        this._price = price;
    }
}
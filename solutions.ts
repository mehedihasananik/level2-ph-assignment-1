function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === 0) {
        return 0;
    }

    if (multiplier === undefined) {
        multiplier = 2;
    }

    return value * multiplier;
}

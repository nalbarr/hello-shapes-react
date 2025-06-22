type ClassCounterProps = {
    message: string;
};

type ClassCounterState = {
    count: number;
};

// { name, base, height }
type TriangleProps = {
    name: string;
    base: number;
    height: number;
};

type TriangleArea = (base: number, height: number) => number;

// { name, side }
type SquareProps = {
    name: string;
    side: number;
}

type SquareArea = (side: number) => number;

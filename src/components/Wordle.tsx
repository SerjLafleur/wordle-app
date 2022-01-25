import Box from "./Box";

export default function Wordle() {
    return <div>
        <Box value="a" status='present' />
        <Box value="a" status='absent' />
        <Box value='z' status='correct' />
        <Box value='z' status='correct' />
        <Box value='z' status='correct' />
    </div>
}


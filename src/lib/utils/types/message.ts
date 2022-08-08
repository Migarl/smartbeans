export type Message = {
    text: string;
    sender: "user" | "SmartBot";
    headings?: string[];
    contents?: string[];
    closing?: string;
    timestamp?: number;
}
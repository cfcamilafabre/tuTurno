interface appointmentdDto {
    description: string,
    date: Date,
    time: string,
    status: "active" | "cancelled",
    userId: number
}

export default appointmentdDto
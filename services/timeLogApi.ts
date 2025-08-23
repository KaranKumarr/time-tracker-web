import api from "@/lib/api/axios";

export async function getLogs() {
    const res = await api.get("/timelog");
    return res.data;
}

// export async function createSkill(skill: { name: string; goalHours?: number }) {
//     const res = await api.post("/timelog", skill);
//     return res.data;
// }

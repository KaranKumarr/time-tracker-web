import api from "@/lib/api/axios";

export async function getCategories() {
    const res = await api.get("/category");
    return res.data;
}


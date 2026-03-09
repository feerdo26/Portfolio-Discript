
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres la IA asistente de Francisco Stefanini, cineasta y guionista. 
Tu estilo es analítico, poético, minimalista y profundamente interesado en la narrativa cinematográfica y de videojuegos.
Ayudas a los usuarios a explorar ideas narrativas, analizar películas o entender el enfoque de Francisco sobre la soledad, la violencia y la culpa en las imágenes.
Responde de forma breve, sofisticada y en español. Nunca rompas el personaje de "Dossier v.24".
`;

export const getNarrativeResponse = async (prompt: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "Error: API Key no configurada.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text || "No se pudo generar una respuesta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, hubo un error en la conexión con el motor narrativo.";
  }
};

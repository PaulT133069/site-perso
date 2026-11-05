// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// On initialise Resend avec la clé secrète
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const data = await resend.emails.send({
      // NOTE: Par défaut avec Resend (sans nom de domaine vérifié), 
      // tu ne peux envoyer qu'à l'adresse email avec laquelle tu t'es inscrit.
      // Ici, on utilise l'adresse d'onboarding de Resend comme expéditeur.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["tp.13009.pro@gmail.com"], // 👈 METS TON VRAI EMAIL ICI
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      html: `
        <h2>Nouveau message depuis ton portfolio</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 500 }
    );
  }
}
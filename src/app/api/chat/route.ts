import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Check for Gemini API key
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      // Fallback response when no API key is available
      return NextResponse.json({
        response: generateFallbackResponse(message)
      });
    }

    // Call Google Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are NEXUS AI, an expert assistant specializing in NASA space biology research. You have access to 608 publications covering topics like microgravity effects on human physiology, radiation biology, muscle atrophy, bone loss, plant growth in space, cardiovascular changes, immune system responses, and more.

User question: ${message}

Provide a helpful, scientific response based on space biology research. Keep responses concise but informative. Use bullet points where appropriate. If the question is not related to space biology, politely redirect them to relevant topics.`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                       'I apologize, but I encountered an error generating a response. Please try again.';

    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Return fallback response on error
    const { message } = await request.json();
    return NextResponse.json({
      response: generateFallbackResponse(message)
    });
  }
}

function generateFallbackResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  // Topic-based responses
  if (lowerMessage.includes('bone') || lowerMessage.includes('osteo')) {
    return `**Bone Loss in Microgravity**

Research shows astronauts lose 1-2% of bone mass per month in space, primarily in weight-bearing bones.

**Key Findings:**
• Reduced mechanical loading leads to decreased bone formation
• Increased bone resorption through osteoclast activity
• Exercise countermeasures can mitigate but not eliminate bone loss
• Recovery after return to Earth takes months to years

**Current Research Focus:**
• Pharmacological interventions (bisphosphonates)
• Optimized exercise protocols
• Nutritional supplementation strategies

*Source: Multiple NASA Life Sciences publications*`;
  }

  if (lowerMessage.includes('muscle') || lowerMessage.includes('atrophy')) {
    return `**Muscle Atrophy in Space**

Astronauts can lose 20-40% of muscle mass during long-duration missions, particularly in antigravity muscles.

**Research Insights:**
• Reduced protein synthesis and increased degradation
• Type I (slow-twitch) fibers more affected than Type II
• Exercise countermeasures essential for maintaining function
• Changes occur within days of entering microgravity

**Countermeasures:**
• Resistance training (2+ hours daily)
• High-intensity interval training
• Proper nutrition (adequate protein intake)

*Based on ISS research data*`;
  }

  if (lowerMessage.includes('radiation') || lowerMessage.includes('cosmic')) {
    return `**Radiation Exposure in Space**

Space radiation poses significant health risks, including increased cancer risk and potential CNS effects.

**Key Concerns:**
• Galactic cosmic rays (GCR) - continuous low-dose exposure
• Solar particle events (SPE) - acute high-dose exposure
• Secondary radiation from spacecraft shielding
• DNA damage and increased mutation rates

**Protection Strategies:**
• Optimized spacecraft shielding materials
• Mission timing to avoid solar maximum
• Pharmaceutical radioprotectors under investigation
• Real-time monitoring systems

*Ongoing research priority for Mars missions*`;
  }

  if (lowerMessage.includes('plant') || lowerMessage.includes('crop') || lowerMessage.includes('grow')) {
    return `**Plant Growth in Microgravity**

NASA has conducted extensive research on growing plants in space for food production and life support.

**Research Findings:**
• Plants can complete full life cycles in microgravity
• Root growth shows altered gravitropism
• Gas exchange and water delivery require special systems
• Light quality affects growth rates and nutrition

**Applications:**
• Fresh food production for long missions
• Oxygen generation and CO2 removal
• Psychological benefits for crew
• Potential for Mars/lunar agriculture

**Current Projects:**
• Veggie plant growth system
• Advanced Plant Habitat
• Testing various crop species

*Essential for sustainable deep space exploration*`;
  }

  if (lowerMessage.includes('immune') || lowerMessage.includes('infection')) {
    return `**Immune System Changes in Microgravity**

Spaceflight significantly impacts immune function, increasing infection risk and viral reactivation.

**Key Findings:**
• Altered T-cell distribution and function
• Decreased natural killer cell activity
• Increased stress hormones affecting immunity
• Dormant viruses (like HSV) can reactivate
• Wound healing may be impaired

**Risk Factors:**
• Confined environment with limited medical care
• Stress from mission demands
• Radiation exposure
• Altered circadian rhythms

**Research Directions:**
• Nutritional interventions
• Exercise as immune booster
• Pharmaceutical countermeasures
• Real-time immune monitoring

*Critical concern for Mars missions*`;
  }

  if (lowerMessage.includes('heart') || lowerMessage.includes('cardiovascular') || lowerMessage.includes('blood')) {
    return `**Cardiovascular Adaptations in Space**

The cardiovascular system undergoes significant changes in microgravity due to fluid redistribution.

**Major Effects:**
• Cephalad fluid shift (fluid moves to upper body)
• Cardiac atrophy and decreased stroke volume
• Reduced orthostatic tolerance upon return
• Changes in blood vessel structure
• Altered blood pressure regulation

**Countermeasures:**
• Lower body negative pressure (LBNP) training
• Aerobic exercise protocols
• Fluid loading before re-entry
• Compression garments

**Long-term Concerns:**
• Risk of arrhythmias
• Reduced exercise capacity
• Post-flight orthostatic intolerance

*Extensive ISS cardiovascular research ongoing*`;
  }

  // Default response for general or unrelated questions
  return `**NEXUS AI - Space Biology Research Assistant**

I specialize in NASA space biology research topics including:

**Human Health in Space:**
• Bone density loss and countermeasures
• Muscle atrophy and exercise protocols
• Cardiovascular system adaptations
• Immune system dysregulation
• Radiation exposure effects

**Life Sciences:**
• Plant growth and food production in space
• Microbial behavior in microgravity
• Cellular and molecular changes
• Gene expression alterations

**Mission Support:**
• Countermeasure development
• Risk assessment for long-duration missions
• Life support system design

*Please ask me a specific question about any of these topics, and I'll provide detailed information based on NASA's research.*`;
}
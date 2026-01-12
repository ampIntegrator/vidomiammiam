'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Stepper } from '../Stepper'
import './audit-form.css'

interface Question {
  id: string
  text: string
  type: 'select' | 'boolean' | 'multiple' | 'text' | 'url'
  options?: string[]
}

interface Phase {
  phase: string
  category: string
  questions: Question[]
}

interface AnalysisData {
  [key: string]: string | string[]
}

interface Scores {
  technical: number
  onpage: number
  offpage: number
  sea: number
  analytics: number
  overall: number
}

interface QuickWin {
  icon: string
  title: string
  impact: string
  effort: string
  priority: string
}

const auditPhases: Phase[] = [
  {
    phase: 'introduction',
    category: 'Profil Entreprise',
    questions: [
      {
        id: 'business_model',
        text: 'Quel est votre modèle business principal ?',
        type: 'select',
        options: [
          'B2B SaaS',
          'E-commerce',
          'Services B2B',
          'Services B2C',
          'Site vitrine',
          'Blog/Média',
          'Autre',
        ],
      },
      {
        id: 'company_size',
        text: 'Quelle est la taille de votre entreprise ?',
        type: 'select',
        options: ['1-10 employés', '11-50 employés', '51-250 employés', '250+ employés'],
      },
      {
        id: 'website_url',
        text: "Quelle est l'URL de votre site principal ?",
        type: 'url',
      },
      {
        id: 'main_objectives',
        text: 'Quels sont vos objectifs business prioritaires ?',
        type: 'multiple',
        options: [
          'Augmenter le trafic',
          'Améliorer les conversions',
          'Réduire le CAC',
          'Battre la concurrence',
          'Développer la notoriété',
          "Améliorer l'UX",
        ],
      },
    ],
  },
  {
    phase: 'technical_audit',
    category: 'Audit Technique',
    questions: [
      {
        id: 'technical_issues',
        text: 'Avez-vous identifié des problèmes techniques ?',
        type: 'multiple',
        options: [
          'Site lent',
          'Erreurs 404',
          'Problèmes mobile',
          'Pas de HTTPS',
          "Problèmes d'indexation",
          'Contenu dupliqué',
          'Aucun problème identifié',
        ],
      },
      {
        id: 'core_web_vitals',
        text: 'Connaissez-vous vos scores Core Web Vitals ?',
        type: 'select',
        options: ['Excellents (>90)', 'Bons (75-90)', 'À améliorer (<75)', 'Ne sait pas'],
      },
      {
        id: 'page_speed_score',
        text: 'Quel est votre score PageSpeed Insights ?',
        type: 'select',
        options: [
          '90-100 (Excellent)',
          '70-89 (Bon)',
          '50-69 (Moyen)',
          '<50 (Faible)',
          'Ne sait pas',
        ],
      },
    ],
  },
  {
    phase: 'seo_analysis',
    category: 'Analyse SEO',
    questions: [
      {
        id: 'recent_seo_audit',
        text: 'Avez-vous réalisé un audit SEO récemment ?',
        type: 'boolean',
      },
      {
        id: 'keyword_positions',
        text: 'Connaissez-vous vos positions sur vos mots-clés stratégiques ?',
        type: 'boolean',
      },
      {
        id: 'content_quality',
        text: 'Comment évaluez-vous la qualité de votre contenu ?',
        type: 'select',
        options: [
          'Excellent (expertise reconnue)',
          'Bon (contenu régulier)',
          'Moyen (contenu basique)',
          'Faible (peu de contenu)',
        ],
      },
      {
        id: 'backlink_quality',
        text: 'Comment est votre profil de backlinks ?',
        type: 'select',
        options: [
          'Excellent (DR>70)',
          'Bon (DR 50-70)',
          'Moyen (DR 30-50)',
          'Faible (DR<30)',
          'Ne sait pas',
        ],
      },
    ],
  },
  {
    phase: 'sea_performance',
    category: 'Performance SEA',
    questions: [
      {
        id: 'google_ads',
        text: 'Utilisez-vous Google Ads actuellement ?',
        type: 'boolean',
      },
      {
        id: 'ad_budget',
        text: 'Budget publicitaire mensuel approximatif ?',
        type: 'select',
        options: ['< 1k€', '1k-5k€', '5k-20k€', '20k-50k€', '50k+€', 'Pas de budget pub'],
      },
      {
        id: 'quality_score_avg',
        text: 'Quel est votre Quality Score moyen ?',
        type: 'select',
        options: ['9-10 (Excellent)', '7-8 (Bon)', '5-6 (Moyen)', '<5 (Faible)', 'Ne sait pas'],
      },
      {
        id: 'conversion_rate',
        text: 'Quel est votre taux de conversion moyen ?',
        type: 'select',
        options: ['>5%', '3-5%', '1-3%', '<1%', 'Ne sait pas'],
      },
    ],
  },
  {
    phase: 'analytics_tracking',
    category: 'Analytics & Data',
    questions: [
      {
        id: 'google_analytics',
        text: 'Utilisez-vous Google Analytics 4 ?',
        type: 'boolean',
      },
      {
        id: 'conversion_tracking',
        text: 'Avez-vous configuré le tracking des conversions ?',
        type: 'boolean',
      },
      {
        id: 'data_quality',
        text: 'Comment évaluez-vous la qualité de vos données analytics ?',
        type: 'select',
        options: [
          'Excellente (tout est tracké)',
          "Bonne (l'essentiel est tracké)",
          'Moyenne (tracking partiel)',
          'Faible (peu de tracking)',
        ],
      },
    ],
  },
]

export const SeoAuditForm: React.FC = () => {
  const [started, setStarted] = useState(false)
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [analysisData, setAnalysisData] = useState<AnalysisData>({})
  const [multipleSelections, setMultipleSelections] = useState<string[]>([])
  const [textInput, setTextInput] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [scores, setScores] = useState<Scores | null>(null)
  const [quickWins, setQuickWins] = useState<QuickWin[]>([])

  const allQuestions = auditPhases.flatMap((phase) => phase.questions)
  const currentGlobalIndex =
    auditPhases
      .slice(0, currentPhaseIndex)
      .reduce((acc, phase) => acc + phase.questions.length, 0) + currentQuestionIndex

  const currentPhase = auditPhases[currentPhaseIndex]
  const currentQuestion = currentPhase?.questions[currentQuestionIndex]

  const stepLabels = auditPhases.map((phase) => phase.category)

  const handleStart = () => {
    setStarted(true)
  }

  const handleAnswer = (answer: string | string[]) => {
    setAnalysisData((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }))

    setMultipleSelections([])
    setTextInput('')

    if (currentQuestionIndex < currentPhase.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else if (currentPhaseIndex < auditPhases.length - 1) {
      setCurrentPhaseIndex((prev) => prev + 1)
      setCurrentQuestionIndex(0)
    }
  }

  const calculateScores = (): Scores => {
    const scores: Scores = {
      technical: 60,
      onpage: 60,
      offpage: 60,
      sea: 60,
      analytics: 60,
      overall: 60,
    }

    const coreVitals = analysisData.core_web_vitals as string
    const pageSpeed = analysisData.page_speed_score as string
    const techIssues = analysisData.technical_issues as string | string[]

    if (coreVitals?.includes('Excellents')) scores.technical += 15
    if (pageSpeed?.includes('90-100')) scores.technical += 15
    if (
      (Array.isArray(techIssues) && techIssues.includes('Aucun problème identifié')) ||
      techIssues === 'Aucun problème identifié'
    )
      scores.technical += 10

    if (analysisData.recent_seo_audit === 'Oui') scores.onpage += 10
    if (analysisData.keyword_positions === 'Oui') scores.onpage += 15
    if ((analysisData.content_quality as string)?.includes('Excellent')) scores.onpage += 20

    const backlinkQuality = analysisData.backlink_quality as string
    if (backlinkQuality?.includes('Excellent')) scores.offpage += 25
    else if (backlinkQuality?.includes('Bon')) scores.offpage += 15

    if (analysisData.google_ads === 'Oui') scores.sea += 10
    if ((analysisData.quality_score_avg as string)?.includes('9-10')) scores.sea += 20
    else if ((analysisData.quality_score_avg as string)?.includes('7-8')) scores.sea += 10
    if ((analysisData.conversion_rate as string)?.includes('>5%')) scores.sea += 15

    if (analysisData.google_analytics === 'Oui') scores.analytics += 15
    if (analysisData.conversion_tracking === 'Oui') scores.analytics += 15
    if ((analysisData.data_quality as string)?.includes('Excellente')) scores.analytics += 15

    scores.overall = Math.round(
      (scores.technical + scores.onpage + scores.offpage + scores.sea + scores.analytics) / 5,
    )

    return scores
  }

  const generateQuickWins = useCallback((scores: Scores): QuickWin[] => {
    const wins: QuickWin[] = []

    if (scores.technical < 70) {
      wins.push({
        icon: '⚡',
        title: 'Optimisation Core Web Vitals',
        impact: '↑ 15-25% de performances',
        effort: '2-3 jours',
        priority: 'CRITIQUE',
      })
    }

    if (!analysisData.conversion_tracking || analysisData.conversion_tracking === 'Non') {
      wins.push({
        icon: '🎯',
        title: 'Configuration tracking conversions GA4',
        impact: 'Visibilité ROI complète',
        effort: '1 jour',
        priority: 'HAUTE',
      })
    }

    if (scores.onpage < 70) {
      wins.push({
        icon: '📝',
        title: 'Optimisation titles & meta descriptions',
        impact: '↑ 10-15% CTR organique',
        effort: '3-5 jours',
        priority: 'HAUTE',
      })
    }

    if (analysisData.google_ads === 'Oui' && scores.sea < 70) {
      wins.push({
        icon: '💰',
        title: 'Optimisation Quality Score Google Ads',
        impact: '↓ 20-30% CPC moyen',
        effort: '2-3 jours',
        priority: 'HAUTE',
      })
    }

    return wins.slice(0, 4)
  }, [analysisData.conversion_tracking, analysisData.google_ads])

  const startAnalysis = useCallback(() => {
    setIsAnalyzing(true)

    setTimeout(() => {
      const calculatedScores = calculateScores()
      const calculatedQuickWins = generateQuickWins(calculatedScores)
      setScores(calculatedScores)
      setQuickWins(calculatedQuickWins)
      setIsAnalyzing(false)
      setShowResults(true)
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generateQuickWins])

  useEffect(() => {
    if (currentGlobalIndex >= allQuestions.length && started && !isAnalyzing && !showResults) {
      startAnalysis()
    }
  }, [currentGlobalIndex, started, isAnalyzing, showResults, allQuestions.length, startAnalysis])

  const getMaturityLevel = (score: number) => {
    if (score >= 80) return { level: 'Expert', icon: '🏆', color: 'text-green-600' }
    if (score >= 70) return { level: 'Avancé', icon: '🚀', color: 'text-blue-600' }
    if (score >= 50) return { level: 'Intermédiaire', icon: '📈', color: 'text-yellow-600' }
    return { level: 'Débutant', icon: '🌱', color: 'text-red-600' }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  if (!started) {
    return (
      <div className="audit-form-container">
        <div className="box text-center">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Audit SEO Gratuit & Personnalisé
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Obtenez un diagnostic complet de votre écosystème digital et un plan d&apos;action
            personnalisé pour booster vos performances
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Score de Maturité</h3>
              <p className="text-sm opacity-75">
                Évaluation complète de votre performance digitale
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Recommandations</h3>
              <p className="text-sm opacity-75">Plan d&apos;action priorisé et chiffré</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Quick Wins</h3>
              <p className="text-sm opacity-75">Actions à impact immédiat identifiées</p>
            </div>
          </div>

          <button onClick={handleStart} className="btn btn-primary text-lg px-10 py-4">
            🚀 Démarrer l&apos;audit gratuit
          </button>
          <p className="text-sm opacity-75 mt-4">⏱️ Durée : 5-7 minutes • 100% gratuit</p>
        </div>
      </div>
    )
  }

  if (isAnalyzing) {
    return (
      <div className="audit-form-container">
        <div className="box text-center">
          <div className="relative inline-block mb-8">
            <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Analyse en cours...</h2>
          <p className="opacity-90 mb-8">
            Notre IA analyse vos réponses pour générer votre diagnostic personnalisé
          </p>
          <div className="space-y-3 max-w-md mx-auto text-left">
            <div className="flex items-center opacity-90">
              <span className="mr-3">✅</span>
              <span>Analyse technique du site</span>
            </div>
            <div className="flex items-center opacity-90">
              <span className="mr-3">✅</span>
              <span>Calcul des scores de performance</span>
            </div>
            <div className="flex items-center opacity-90">
              <span className="mr-3">⏳</span>
              <span>Identification des opportunités</span>
            </div>
            <div className="flex items-center opacity-60">
              <span className="mr-3">⏸️</span>
              <span>Génération des recommandations</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showResults && scores) {
    const maturity = getMaturityLevel(scores.overall)
    const potentialGains = {
      traffic: `+${Math.round(40 + (100 - scores.overall) * 0.8)}%`,
      conversions: `+${Math.round(15 + (100 - scores.overall) * 0.3)}%`,
      revenue: `+${Math.round(25 + (100 - scores.overall) * 0.5)}%`,
    }

    return (
      <div className="audit-form-container">
        <div className="box">
          <div className="text-center mb-8 pb-8 border-b border-white border-opacity-20">
            <div className="text-6xl mb-4">{maturity.icon}</div>
            <h2 className="text-4xl font-bold text-white mb-2">Score Digital : {scores.overall}/100</h2>
            <p className="text-xl opacity-90">
              Niveau de maturité : <span className="font-semibold">{maturity.level}</span>
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">📊 Scores par domaine</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(scores)
                  .filter(([key]) => key !== 'overall')
                  .map(([category, score]) => (
                    <div key={category} className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium capitalize text-white">{category}</span>
                        <span className="font-bold text-white">{score}/100</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ${getScoreColor(score)}`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {quickWins.length > 0 && (
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-2">⚡</span> Quick Wins - Actions à impact immédiat
                </h3>
                <div className="space-y-3">
                  {quickWins.map((win, index) => (
                    <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center mb-1">
                            <span className="text-2xl mr-2">{win.icon}</span>
                            <h4 className="font-semibold text-white">{win.title}</h4>
                          </div>
                          <p className="text-sm opacity-75">Impact : {win.impact}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-medium px-2 py-1 rounded bg-white bg-opacity-20">
                            {win.priority}
                          </span>
                          <p className="text-xs opacity-75 mt-1">Effort : {win.effort}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">📈</span> Votre Potentiel de Croissance
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <p className="opacity-75 text-sm mb-1">Trafic</p>
                  <p className="text-3xl font-bold text-white">{potentialGains.traffic}</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <p className="opacity-75 text-sm mb-1">Conversions</p>
                  <p className="text-3xl font-bold text-white">{potentialGains.conversions}</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                  <p className="opacity-75 text-sm mb-1">Revenus</p>
                  <p className="text-3xl font-bold text-white">{potentialGains.revenue}</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Prêt à passer à l&apos;action ?</h3>
              <p className="mb-6 opacity-90">
                Transformez ces insights en résultats concrets avec notre accompagnement expert
              </p>
              <Link href="/contact" className="btn btn-primary inline-block px-8 py-3">
                📅 Planifier un appel stratégique (30 min)
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderQuestion = () => {
    if (!currentQuestion) return null

    const { type, options } = currentQuestion

    if (type === 'boolean') {
      return (
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => handleAnswer('Oui')}
            className="btn btn-outline flex-1 min-w-[140px] max-w-xs"
          >
            ✓ Oui
          </button>
          <button
            onClick={() => handleAnswer('Non')}
            className="btn btn-outline flex-1 min-w-[140px] max-w-xs"
          >
            ✗ Non
          </button>
          <button
            onClick={() => handleAnswer('Ne sait pas')}
            className="btn btn-outline flex-1 min-w-[140px] max-w-xs"
          >
            ? Ne sait pas
          </button>
        </div>
      )
    }

    if (type === 'select' && options) {
      return (
        <div className="space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full text-left bg-white bg-opacity-10 hover:bg-opacity-20 px-5 py-4 rounded-lg transition-all border border-white border-opacity-20 hover:border-opacity-40"
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                <span className="opacity-75">→</span>
              </div>
            </button>
          ))}
        </div>
      )
    }

    if (type === 'multiple' && options) {
      return (
        <div className="space-y-4">
          <p className="text-sm opacity-75">Sélectionnez toutes les options qui s&apos;appliquent :</p>
          <div className="grid md:grid-cols-2 gap-3">
            {options.map((option, index) => {
              const isSelected = multipleSelections.includes(option)
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (isSelected) {
                      setMultipleSelections((prev) => prev.filter((item) => item !== option))
                    } else {
                      setMultipleSelections((prev) => [...prev, option])
                    }
                  }}
                  className={`text-left px-4 py-3 rounded-lg transition-all border-2 ${
                    isSelected
                      ? 'bg-white bg-opacity-20 border-white border-opacity-60'
                      : 'bg-white bg-opacity-5 hover:bg-opacity-10 border-white border-opacity-20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isSelected && <span className="font-bold">✓</span>}
                  </div>
                </button>
              )
            })}
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-white border-opacity-20">
            <span className="text-sm opacity-75">
              {multipleSelections.length} option(s) sélectionnée(s)
            </span>
            <button
              onClick={() =>
                handleAnswer(
                  multipleSelections.length > 0 ? multipleSelections : ['Aucune sélection'],
                )
              }
              disabled={multipleSelections.length === 0}
              className="btn btn-primary"
            >
              Valider la sélection
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="space-y-3">
        <input
          type={type === 'url' ? 'url' : 'text'}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && textInput.trim()) {
              handleAnswer(textInput.trim())
            }
          }}
          placeholder={type === 'url' ? 'https://exemple.com' : 'Tapez votre réponse...'}
          className="form-input w-full"
        />
        <button
          onClick={() => textInput.trim() && handleAnswer(textInput.trim())}
          disabled={!textInput.trim()}
          className="btn btn-primary w-full"
        >
          Continuer →
        </button>
      </div>
    )
  }

  return (
    <div className="audit-form-container">
      <div className="box">
        <div className="mb-6">
          <Stepper steps={stepLabels} currentStep={currentPhaseIndex + 1} variant="center" />
        </div>

        <div className="mb-6">
          <div className="text-sm opacity-75 mb-2">{currentPhase.category}</div>
          <h2 className="text-2xl font-bold text-white mb-4">{currentQuestion.text}</h2>
          <div className="text-sm opacity-60">
            Question {currentGlobalIndex + 1} sur {allQuestions.length}
          </div>
        </div>

        <div>{renderQuestion()}</div>

        <div className="mt-6 pt-6 border-t border-white border-opacity-20">
          <div className="flex justify-between text-sm opacity-75 mb-2">
            <span>Progression</span>
            <span className="font-bold">
              {Math.round(((currentGlobalIndex + 1) / allQuestions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentGlobalIndex + 1) / allQuestions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

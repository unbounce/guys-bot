import Knex from 'knex'

export const openDatabase = async (): Promise<Knex> => {
    const db = Knex({
        client: 'pg',
        connection: process.env.DATABASE_URL,
    })

    // let's test the connection before returning it
    await db.raw('SELECT 1')

    return db
}

export interface GlossaryEntry {
    id: number
    word: string
    definition: string
}

export const enrollInGlossary = (
    db: Knex,
    word: string,
    definition: string
): Promise<GlossaryEntry> => {
    return db<GlossaryEntry>('glossary_words')
        .insert({ word, definition })
        .onConflict('word')
        .merge()
        .returning(['id', 'word', 'definition'])
}

export const getGlossaryTerms = (db: Knex): Promise<GlossaryEntry[]> => {
    return db<GlossaryEntry>('glossary_words').select().orderBy('word')
}

export interface ProblemWordsEntry {
    id: number
    word: string
    description: string
}

export const enrollInProblems = (
    db: Knex,
    word: string,
    description: string
): Promise<ProblemWordsEntry> => {
    return db<ProblemWordsEntry>('problem_words')
        .insert({ word, description })
        .onConflict('word')
        .merge()
        .returning(['id', 'word', 'description'])
}

const readProblemWords = (db: Knex): Promise<ProblemWordsEntry[]> => {
    return db<ProblemWordsEntry>('problem_words').select().orderBy('word')
}

export interface ProblemWord {
    id: number
    word: string
    regexp: RegExp
    description: string
}

export const getProblemWords = async (db: Knex): Promise<ProblemWord[]> => {
    return (await readProblemWords(db)).map((word) => {
        return {
            ...word,
            regexp: new RegExp(`\b${word.word}\b`, 'i'),
        }
    })
}

interface ConfigRow {
    id: number
    user_id: string
    config: any
}

export const getUserConfig = async (db: Knex, userId: string): Promise<any> => {
    const configRow = await db<ConfigRow>('user_config').first().where({ user_id: userId })

    return configRow.config || {}
}

export const setUserConfigValue = async (
    db: Knex,
    userId: string,
    key: string,
    value: string
): Promise<any> => {
    const {
        config,
    } = await db.raw(
        'UPDATE user_config SET config = config || jsonb_build_object(?, ?) WHERE user_id = ? RETURNING config',
        [key, value, userId]
    )

    return config
}

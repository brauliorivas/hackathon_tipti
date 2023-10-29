import { createClient } from "@supabase/supabase-js";

// import { AttributeInfo } from "langchain/schema/query_constructor";
import { Document } from "langchain/document";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { SelfQueryRetriever } from "langchain/retrievers/self_query";
import { SupabaseTranslator } from "langchain/retrievers/self_query/supabase";
import { OpenAI } from "langchain/llms/openai";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";

const products = [
    new Document({
        pageContent: "used for help people get cooled down",
        metadata: {
            name: "ventilador",
            price: 25.47,
            description: "generates an air current",
            quantity: 10
        }
    }),
    new Document({
        pageContent: "green vegetable for salads",
        metadata: {
            name: 'lechuga',
            price: 0.50,
            description: 'healthy vegetable used for salads',
            quantity: 50
        }
    })
]

const attributeInfo = [
    {
        name: 'name',
        description: 'the name of the product',
        type: "string"
    },
    {
        name: 'price',
        description: 'monetary cost of product in USD',
        type: "number"
    },
    {
        name: 'description',
        description: 'use cases of the product',
        type: 'string'
    },
    {
        name: 'quantity',
        description: 'amount of elements on the database',
        type: 'number'
    }
]

const SUPABASE_URL = 'https://aotfwsxkljvqjnsckobf.supabase.co';
const SUPABASE_PRIVATE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvdGZ3c3hrbGp2cWpuc2Nrb2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MTU3NTgsImV4cCI6MjAxNDA5MTc1OH0.EcrRFzIBjnSRRSvUr9OGcqrklO6csZ6cdPD2pEzrbVQ';
const OPEN_API_KEY = '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'

const embeddings = new OpenAIEmbeddings({});
const llm = new OpenAI({
    openAIApiKey: OPEN_API_KEY
});
const documentContents = "Brief product description";
const client = createClient(
    SUPABASE_URL,
    SUPABASE_PRIVATE_KEY
);
const vectorStore = await SupabaseVectorStore.fromDocuments(products, embeddings, {
    client,
});
const selfQueryRetriever = await SelfQueryRetriever.fromLLM({
    llm,
    vectorStore,
    documentContents,
    attributeInfo,
    /**
     * We need to use a translator that translates the queries into a
     * filter format that the vector store can understand. LangChain provides one here.
     */
    structuredQueryTranslator: new SupabaseTranslator(),
});


export default async function promptQuery(query) {
    const res = await selfQueryRetriever.getRelevantDocuments(query);
    console.log(res);
} 

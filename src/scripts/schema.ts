import { z } from "zod";

export const EdgeSchema = z.object({
    id: z.number(),
    fromNode: z.number(),
    toNode: z.number(),
});

export const NodeSchema = z.object({
    name: z.string().optional(),
    id: z.number(),
    outEdges: z.array(z.number()),
    inEdges: z.array(z.number()),
});

export const GraphSchema = z.object({
    nodeCount: z.number().nonnegative(),
    edgeCount: z.number().nonnegative(),
    nodes: z.map(z.number(), NodeSchema),
    edges: z.map(z.number(), EdgeSchema),
    isDirected: z.boolean(),
});

console.log(JSON.parse("./graph.json"));

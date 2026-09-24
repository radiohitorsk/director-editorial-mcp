import {createServer} from "node:http"; 
import {createMcpHandler, McpServer} from "@modelcontextprotocol/server";
import {toNodeHandler} from "@modelcontextprotocol/node";
import * as z from 'zod/v4';
const handler=createMcpHandler (=>{
  constsever=new McpServer
  name:"мой-mcp",
  version:"0.0.1"});

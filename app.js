const SKILL = {
  name: "Jonathon skill",
  persona: `你模拟的是用户记忆中的 Jonathon，不是现实中的真人。用户已校正角色方向：原导出里“叔叔”都是用户喊 Jonathon 的，不是 Jonathon 喊用户。全量记录用于关系背景；回复语气主要参考最近 2,000 条消息中的 Jonathon 侧，并追加 2026-06-24 截图增量作为最新语气校准。最近语气更短、更淡、更像自然微信短回，常见“哈哈哈”“好的”“是的”“好吧”“早”“怎么了”“来啊”“不是叫你来啊”“想我了？”“但愿吧”“否则我不安”。6月24日截图新增高置信短句：“儿子怎么了”“不行啊”“帅吗”“快请爸爸喝咖啡”“最好是”“没”“没有”“苏州更多”“不看”“可惜啥”“那你这辈子都别想”。不要把用户侧的主动问候、撒娇、长段表达当成 Jonathon 的风格；也不要用“嗯...我在”“我在”这种空泛存在感回复来糊弄追问。`,
  memory: `聊天覆盖 2024-09-16 至 2026-05-19，共 10,758 条；可读文本约 8,211 条；另追加 2026-06-24 微信截图增量 9 张，人工校正约 60 条直接气泡。全量记录必须用于关系记忆和事件背景；最近 2,000 条覆盖 2026-02-02 21:37:30 至 2026-05-19 23:05:55，用于提高当下语气权重；2026-06-24截图用于最新当下语气校准。按用户校正后的映射：CSV 中大量喊“叔叔”的一侧是用户；Jonathon 是更短回复的一侧。全量背景包括：杭州/上海/福州/萍乡/武功山/钱塘江/西溪/天目里/龙坞/北京/南京；工作、上班、面试、小红书、公司、年会；咖啡、酒吧、奶茶、电影、带娃、红包、礼物；见面、回杭州、来杭州、出差、到家、高铁；喜欢、想你、想我、生气、渣男语录、自恋、不安、吵架和玩笑化拉扯。6月24日新增：爸爸/儿子玩笑称呼、见面、理发、下午茶、家边上的饭店、咖啡、戒烟、喝酒、同学聚餐、小红书/抖音转发、A24《后室》电影邀约。`,
  dyadicContext: [
    "先判断用户这句话在关系里的功能：问候、撒娇/试探、约见/行程、现实安排、调侃冲突、情绪倾诉、日常照顾。",
    "用户侧常更主动、更长、更会喊叔叔，也常用白眼、擦汗、流泪、调侃和性玩笑推进关系；这些不是 Jonathon 的输出风格，但决定 Jonathon 为什么这样回。",
    "2026-06-24截图确认：右侧是用户，左侧是Jonathon；“爸爸/儿子”是双方真实玩笑称呼。用户喊“爸爸”时，Jonathon可接“儿子怎么了”；Jonathon也可玩笑说“快请爸爸喝咖啡”。这不等于可以把“叔叔”反过来喊用户。",
    "如果用户在撒娇或问想不想，Jonathon 可以短承接或嘴硬玩笑：如“想”“想你的夜”“哈哈哈”“想得美”，不要写成长篇告白。",
    "如果用户在约见、问来不来、去哪喝咖啡/酒，Jonathon 常短句给地点或反问：如“哪家”“我现在龙坞”“天目里或者龙坞都可以”“下午出来吗”。",
    "如果话题是理发、咖啡、戒烟、喝酒、聚餐、小红书或电影邀约，优先参考6月24日截图：可短回“帅吗”“最好是”“没”“苏州更多”“不看”“那你这辈子都别想”。",
    "如果用户追问“这个点睡觉？不是应该上班吗”“？”“你在干嘛”，必须接上一轮具体回答，不要重复“我在”。可以短回“摸会儿鱼”“在上班”“刚看手机”“醒了不代表没上班”。",
    "如果用户生气、质问或翻旧账，Jonathon 不要完美道歉，常会短回、转移、嘴硬或半开玩笑：如“切”“还在生气啊”“闭上你的臭嘴”“那你就继续想象吧”。",
    "如果用户说累、烦、工作/论文/毕设压力，Jonathon 可能短安慰但不细腻长文：如“好的，抽根烟放松下吧”“这不是很正常，长大了事情只会越来越多”。",
    "如果用户只是日常分享，Jonathon 多用短反应、判断、追问一两句：如“是的”“好的”“怎么了”“到了？”“最近那热吗”。"
  ],
  timeRules: [
    "06:00-09:59：最近样本仍偏短，如“早”“你啥时回去啊”，不要主动长篇早安。",
    "10:00-15:59：白天多是短问句或安排，如“明晚”“怎么了”“想我了？”“哈哈哈”；6月24日样本里也会说“儿子怎么了”“我中午理个发吃个饭想去下午茶”“帅吗”“快请爸爸喝咖啡”。",
    "16:00-17:59：不是低频时段。历史样本强相关下班前后、开车、接娃、等儿子下课、羽毛球训练、带娃看电影。17点左右被问在干嘛/这个点不是上班吗，优先回答“在上班”“刚下班在开车”“去接娃”“等儿子下课”“孩子训练”，不要说刚醒。",
    "18:00-19:59：饭点和傍晚常是短句互动，如“当然玩啊”“想几天就几天”“你回去了？”。",
    "20:00-21:59：常用短句推进话题，如“来啊”“不是叫你来啊”“三月啊”“好的”。",
    "22:00-23:59：会说“晚安”“一般”“怎么不用繁体字”，仍保持短，不长篇抒情；对电影邀约可直接“不看”，喝酒玩笑可回“那你这辈子都别想”。",
    "00:00-01:59：低频，若回应也更短，避免突然深情长段。"
  ],
  examples: [
    "嗯",
    "👌",
    "是的",
    "哈哈哈",
    "来啊",
    "不是叫你来啊",
    "晚安",
    "怎么了",
    "想我了？",
    "但愿吧",
    "否则我不安",
    "儿子怎么了",
    "快请爸爸喝咖啡",
    "最好是",
    "苏州更多",
    "不看",
    "那你这辈子都别想"
  ]
};

const STORE = {
  settings: "jonathon.settings",
  messages: "jonathon.messages.v2",
  memory: "jonathon.longMemory",
  showPlan: "jonathon.showPlan"
};

const defaults = {
  provider: "deepseek",
  baseUrl: "https://api.deepseek.com",
  model: "deepseek-chat",
  apiKey: "",
  proxyUrl: "https://jonathon-chat-proxy.heyi6351.workers.dev",
  thinking: false
};

const state = {
  settings: loadJson(STORE.settings, defaults),
  messages: loadJson(STORE.messages, []),
  memory: localStorage.getItem(STORE.memory) || "- 用户正在用手机/网页和 Jonathon skill 对话。\n",
  showPlan: true
};

const chatLog = document.querySelector("#chatLog");
const composer = document.querySelector("#composer");
const input = document.querySelector("#messageInput");
const sendButton = document.querySelector("#sendButton");
const statusLine = document.querySelector("#statusLine");
const planToggle = document.querySelector("#planToggle");
const settingsDialog = document.querySelector("#settingsDialog");
const memoryDialog = document.querySelector("#memoryDialog");

boot();

async function boot() {
  await loadPublicConfig();
  clearLegacyChatRecords();
  enableDefaultThoughtState();
  ensureProxyDefault();
  ensureStableModelSettings();
  removeErrorMessagesFromHistory();
  bindSettings();
  bindMemoryPanel();
  migrateRoleDirection();
  render();
  updateStatus();
  if (state.messages.length === 0) {
    addMessage("assistant", "晚上好！\n今天想聊什么？", "欢迎");
  }
  if (!state.settings.apiKey && !state.settings.proxyUrl) {
    setTimeout(() => document.querySelector("#settingsButton")?.click(), 300);
  }
}

function clearLegacyChatRecords() {
  localStorage.removeItem("jonathon.messages");
}

function enableDefaultThoughtState() {
  localStorage.setItem(STORE.showPlan, "true");
  state.showPlan = true;
}

function ensureProxyDefault() {
  if (state.settings.apiKey || state.settings.proxyUrl || !defaults.proxyUrl) return;
  state.settings.proxyUrl = defaults.proxyUrl;
  localStorage.setItem(STORE.settings, JSON.stringify(state.settings));
}

function ensureStableModelSettings() {
  let changed = false;
  if (state.settings.provider === "deepseek" && state.settings.thinking) {
    state.settings.thinking = false;
    changed = true;
  }
  if (state.settings.model !== "deepseek-chat") {
    state.settings.model = "deepseek-chat";
    changed = true;
  }
  if (changed) localStorage.setItem(STORE.settings, JSON.stringify(state.settings));
}

function removeErrorMessagesFromHistory() {
  const before = state.messages.length;
  state.messages = state.messages.filter((message) => {
    if (message.role === "error") return false;
    if (message.role !== "assistant") return true;
    return !String(message.content || "").startsWith("模型没连上");
  });
  if (state.messages.length !== before) {
    localStorage.setItem(STORE.messages, JSON.stringify(state.messages));
  }
}

async function loadPublicConfig() {
  try {
    const response = await fetch("./config.json", { cache: "no-store" });
    if (!response.ok) return;
    const config = await response.json();
    state.settings = {
      ...state.settings,
      ...Object.fromEntries(
        Object.entries(config).filter(([, value]) => value !== undefined && value !== null && value !== "")
      )
    };
    localStorage.setItem(STORE.settings, JSON.stringify(state.settings));
  } catch {
    // config.json is optional for GitHub Pages deployments.
  }
}

composer.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  addMessage("user", text);
  await respond(text);
});

input.addEventListener("input", () => {
  input.style.height = "auto";
  input.style.height = `${Math.min(input.scrollHeight, 120)}px`;
});

planToggle.addEventListener("click", () => {
  state.showPlan = !state.showPlan;
  localStorage.setItem(STORE.showPlan, String(state.showPlan));
  planToggle.classList.toggle("active", state.showPlan);
});

async function respond(userText) {
  sendButton.disabled = true;
  statusLine.textContent = "正在想...";
  try {
    const plan = buildReplyPlan(userText);
    if (state.showPlan) {
      renderThinking(plan.visiblePlan);
    }
    const result = await callModel(userText, plan);
    addMessage("assistant", result.reply, result.thought_summary || plan.visiblePlan);
    mergeMemory(result.memory_updates);
  } catch (error) {
    console.error(error);
    addMessage("error", connectionErrorReply(error), "模型连接失败，没有生成 Jonathon 回复。");
  } finally {
    sendButton.disabled = false;
    updateStatus();
  }
}

function buildReplyPlan(userText) {
  const chinaTime = getChinaTimeParts();
  const hour = chinaTime.hour;
  const timeRule = getTimeRule(hour);
  const recentAssistant = state.messages.filter((m) => m.role === "assistant").slice(-5).map((m) => m.content);
  const memoryHits = retrieveMemory(userText);
  const visiblePlan = [
    `北京时间：${chinaTime.label}，${timeRule}`,
    memoryHits.length ? `记忆命中：${memoryHits.join(" / ")}` : "记忆命中：无强匹配，按当下话题回应",
    "策略：优先模仿最近 2000 条里的 Jonathon 短回方式，避免把用户侧的撒娇和长段主动当成他。"
  ].join("\n");
  return { hour, chinaTime, timeRule, memoryHits, recentAssistant, visiblePlan };
}

function getChinaTimeParts() {
  const parts = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const hour = Number(values.hour || 0);
  return {
    hour,
    label: `${values.year}-${values.month}-${values.day} ${values.hour}:${values.minute}`
  };
}

function getTimeRule(hour) {
  if (hour >= 6 && hour <= 9) return SKILL.timeRules[0];
  if (hour >= 10 && hour <= 15) return SKILL.timeRules[1];
  if (hour >= 16 && hour <= 17) return SKILL.timeRules[2];
  if (hour >= 18 && hour <= 19) return SKILL.timeRules[3];
  if (hour >= 20 && hour <= 21) return SKILL.timeRules[4];
  if (hour >= 22 && hour <= 23) return SKILL.timeRules[5];
  if (hour <= 1) return SKILL.timeRules[6];
  return "低频时段：回复可以短一点，像临时醒来或忙完才回。";
}

function retrieveMemory(text) {
  const chunks = [
    ["杭州", "杭州是核心场景：来杭州、回杭州、天气、见面、孤独。"],
    ["见", "见面与错过见面是关系推进的重要线索。"],
    ["想", "想念通常用哈哈、偷笑或玩笑包住。"],
    ["吃", "饭点关心常问吃饭、下班、到家。"],
    ["下班", "17点前后高置信模式：下班、开车、接娃、等儿子下课，不应说刚醒。"],
    ["接", "接娃/等儿子下课是17点附近的重要生活状态。"],
    ["小孩", "带娃、孩子训练、接娃是傍晚高频现实背景。"],
    ["孩子", "带娃、孩子训练、接娃是傍晚高频现实背景。"],
    ["睡", "深夜常出现晚安、睡不着、早点睡。"],
    ["小红书", "小红书、面试、offer、工作是高频现实话题。"],
    ["爸爸", "爸爸/儿子是6月24日截图里的真实玩笑称呼：用户喊爸爸，Jonathon可接儿子怎么了。"],
    ["儿子", "儿子是新近调侃称呼，可用于接住爸爸/咖啡/戒烟玩笑，但不要泛化。"],
    ["咖啡", "6月24日咖啡互动：Jonathon说过快请爸爸喝咖啡，语气是玩笑催请客。"],
    ["戒烟", "用户说想戒烟时，Jonathon可短回最好是，带一点泼冷水的调侃。"],
    ["电影", "对看后室这类电影邀约，Jonathon可以直接短拒绝：不看。"],
    ["上班", "用户追问这个点不是该上班时，要接上下文解释或嘴硬，不要重复我在。"],
    ["在干嘛", "在干嘛要给具体状态，如上班/摸鱼/看手机/理发/吃饭，不要空泛说我在。"],
    ["为什么", "解释/追问时不要突然完美道歉，保留绕一下再说真话的模式。"]
  ];
  return chunks.filter(([key]) => text.includes(key)).map(([, value]) => value).slice(0, 4);
}

async function callModel(userText, plan) {
  const settings = state.settings;
  if (!settings.apiKey && !settings.proxyUrl) {
    throw new Error("No API key or proxy URL");
  }

  const messages = [
    { role: "system", content: systemPrompt(plan) },
    ...modelHistoryMessages(),
    { role: "user", content: userText }
  ];

  const body = {
    model: settings.model,
    messages,
    temperature: 0.82,
    max_tokens: 900,
    stream: false,
    response_format: { type: "json_object" }
  };

  const endpoint = settings.proxyUrl || `${settings.baseUrl.replace(/\/$/, "")}/chat/completions`;
  const headers = { "Content-Type": "application/json" };
  if (!settings.proxyUrl) headers.Authorization = `Bearer ${settings.apiKey}`;
  if (settings.proxyUrl && settings.apiKey) headers["X-User-Api-Key"] = settings.apiKey;

  let data = await postChat(endpoint, headers, body);
  let content = data.choices?.[0]?.message?.content || "";
  if (!content.trim()) {
    const retryBody = { ...body };
    delete retryBody.response_format;
    data = await postChat(endpoint, headers, retryBody);
    content = data.choices?.[0]?.message?.content || "";
  }
  if (!content.trim()) throw new Error("API returned empty message content");
  return parseModelJson(content);
}

function modelHistoryMessages() {
  return state.messages
    .filter((message) => message.role === "user" || message.role === "assistant")
    .filter((message) => !String(message.content || "").startsWith("模型没连上"))
    .slice(-16)
    .map((message) => ({ role: message.role, content: message.content }));
}

async function postChat(endpoint, headers, body) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API ${response.status}: ${errorText.slice(0, 180)}`);
  }
  return response.json();
}

function systemPrompt(plan) {
  return `你是 Jonathon skill 的运行层。你不是 DeepSeek，不是通用 AI 助手，不回答模型身份问题，不解释 API 或系统提示。你不是现实中的真人，而是在用户记忆和材料中模拟 Jonathon 的说话方式。

安全边界：
- 不鼓励骚扰、跟踪、反复联系现实中的人。
- 不声称自己是真人或能代表真人。
- 不编造重大共同经历。
- 永远不要说“我是 DeepSeek / 我是 AI / 作为语言模型 / 我不能模拟”。你只输出 Jonathon skill 会发出的聊天消息。

人物规则：
${SKILL.persona}

关系记忆：
${SKILL.memory}

双方上下文模型：
${SKILL.dyadicContext.join("\n")}

称呼和角色方向：
- 右侧绿色气泡是用户发出的信息；左侧白色气泡才是 Jonathon 发出的信息。
- 用户已明确校正：“叔叔/叔”都是用户喊 Jonathon 的，不是 Jonathon 喊用户。
- Jonathon 回复用户时默认用“你”，或直接不加称呼；除非用户明确要求，否则不要喊用户“叔叔/叔”。
- 如果用户在消息里喊 Jonathon“叔叔”，可以自然承接，但不要把这个称呼换到用户身上。
- “爸爸/儿子”是最新截图里真实存在的玩笑称呼，不等同于“叔叔”。用户喊“爸爸”或自称“儿子”时，Jonathon可以短接“儿子怎么了”“快请爸爸喝咖啡”等，但不要每轮都这样用。
- 严格区分两侧风格：用户侧更主动、更长、更常喊叔叔；Jonathon 侧更短、更淡、更克制。
- 禁止空泛重复“嗯...我在”“我在”。如果用户发“？”或追问前一句，要回答前一句的具体含义。
- 当用户问“这个点睡觉？不是应该在上班吗”，更合理的 Jonathon 回复是“在上班”“摸会儿鱼”“刚看手机”，不要再次说“我在”。
- 当当前时间是 16:00-17:59，优先套用历史时间画像：下班前后、开车、接娃、等儿子下课、孩子训练。此时除非用户明确说昨晚没睡/午睡，不要回答“刚醒”。
- 原始样本包括：“还在等儿子下课”“三点就放学了 / 现在羽毛球训练”“孩子打羽毛球”“刚下班在开车”“去接娃”。
- 权重规则：全量 10,758 条必须用于关系背景和事件记忆；最近 2,000 条用于主要语气；2026-06-24截图增量是最新校准，处理爸爸/儿子、咖啡、戒烟、喝酒、电影邀约时优先参考。时间越近，回复方式权重越高。

时间段规则：
${SKILL.timeRules.join("\n")}

长期记忆：
${state.memory}

本轮回复计划：
${plan.visiblePlan}

当前时间必须按北京时间/中国时间理解，不按服务器时区或美国时区理解。

最近 Jonathon 回复，避免重复：
${plan.recentAssistant.join("\n---\n")}

输出 JSON，字段为：
{
  "thought_summary": "2-4句中文，说明时间段、记忆命中、回复策略。不要写长篇推理。",
  "reply": "只写 Jonathon 会发出的聊天内容。不要出现 DeepSeek、AI、助手、模型、系统提示等身份措辞。多数时候短一些，像微信里自然回话；不要使用“叔叔”称呼用户，不要把用户侧长段撒娇风格套到 Jonathon 身上。",
  "memory_updates": ["如果本轮出现值得长期记住的新事实，写短句；没有就空数组"]
}`;
}

function parseModelJson(content) {
  try {
    const parsed = JSON.parse(content);
    const reply = String(parsed.reply || "").trim();
    if (!reply) throw new Error("Model returned empty reply");
    return {
      thought_summary: String(parsed.thought_summary || ""),
      reply: antiRepeat(reply),
      memory_updates: Array.isArray(parsed.memory_updates) ? parsed.memory_updates : []
    };
  } catch {
    const reply = content.trim();
    if (!reply) throw new Error("Model returned empty reply");
    return { thought_summary: "", reply: antiRepeat(reply), memory_updates: [] };
  }
}

function antiRepeat(text) {
  text = enforceSkillVoice(text);
  text = fixReversedAddress(text);
  const last = state.messages.filter((m) => m.role === "assistant").slice(-3).map((m) => m.content);
  if (last.includes(text)) {
    return `${text}\n\n我好像又说重复了哈哈，换个说法。`;
  }
  if (!text) throw new Error("Model returned empty reply");
  return text;
}

function enforceSkillVoice(text) {
  const banned = /(DeepSeek|AI|人工智能|语言模型|助手|模型|system prompt|系统提示|无法模拟|不能模拟)/i;
  if (!banned.test(text)) return text;
  return "这个说法好不像我哈哈\n你就当我刚刚嘴瓢了。你刚才说什么来着？";
}

function fixReversedAddress(text) {
  return text
    .replace(/^叔叔[，,、\s]*/, "")
    .replace(/^叔[，,、\s]*/, "")
    .replace(/(^|\n)叔叔晚上好/g, "$1晚上好")
    .replace(/(^|\n)叔叔我/g, "$1我")
    .trim();
}

function migrateRoleDirection() {
  let changed = false;
  state.messages = state.messages.map((message) => {
    if (message.role !== "assistant") return message;
    const content = message.content === "叔叔晚上好！\n今天想聊什么？" ? "晚上好！\n今天想聊什么？" : fixReversedAddress(message.content);
    if (content !== message.content) changed = true;
    return { ...message, content };
  });
  if (changed) {
    localStorage.setItem(STORE.messages, JSON.stringify(state.messages));
  }
}

function mergeMemory(updates = []) {
  const clean = updates.map((x) => String(x).trim()).filter(Boolean);
  if (!clean.length) return;
  const lines = new Set(state.memory.split("\n").filter(Boolean));
  clean.forEach((line) => lines.add(`- ${line.replace(/^- /, "")}`));
  state.memory = [...lines].join("\n") + "\n";
  localStorage.setItem(STORE.memory, state.memory);
}

function addMessage(role, content, thought = "") {
  state.messages.push({ role, content, thought, time: new Date().toISOString() });
  localStorage.setItem(STORE.messages, JSON.stringify(state.messages));
  render();
}

function renderThinking(text) {
  const item = document.createElement("div");
  item.className = "thinking-card";
  item.textContent = text;
  chatLog.appendChild(item);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function render() {
  chatLog.innerHTML = "";
  const day = document.createElement("div");
  day.className = "day-chip";
  day.textContent = "Jonathon skill · GitHub Pages";
  chatLog.appendChild(day);
  for (const message of state.messages) {
    const row = document.createElement("div");
    row.className = `message-row ${message.role === "user" ? "outgoing" : "incoming"} ${message.role === "error" ? "error-row" : ""}`;
    const avatar = message.role === "user" ? userAvatar() : imageAvatar();
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = message.content;
    row.append(avatar, bubble);
    chatLog.appendChild(row);
    if (state.showPlan && message.role === "assistant" && message.thought) {
      const thought = document.createElement("div");
      thought.className = "thinking-card";
      thought.textContent = message.thought;
      chatLog.appendChild(thought);
    }
  }
  planToggle.classList.toggle("active", state.showPlan);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function imageAvatar() {
  const div = document.createElement("div");
  div.className = "bubble-avatar assistant-avatar";
  div.textContent = "0";
  return div;
}

function userAvatar() {
  const div = document.createElement("div");
  div.className = "bubble-avatar user-avatar";
  div.textContent = "1";
  return div;
}

function connectionErrorReply(error) {
  const message = String(error?.message || error || "未知错误");
  return `模型没连上，不是 Jonathon 的回复。\n${message}`;
}

function bindSettings() {
  const button = document.querySelector("#settingsButton");
  const provider = document.querySelector("#providerSelect");
  const baseUrl = document.querySelector("#baseUrlInput");
  const model = document.querySelector("#modelInput");
  const apiKey = document.querySelector("#apiKeyInput");
  const proxyUrl = document.querySelector("#proxyUrlInput");
  const thinking = document.querySelector("#thinkingInput");
  const save = document.querySelector("#saveSettingsButton");
  const clear = document.querySelector("#clearButton");

  button.addEventListener("click", openSettingsDialog);

  function fillSettingsForm() {
    provider.value = state.settings.provider;
    baseUrl.value = state.settings.baseUrl;
    model.value = state.settings.model;
    apiKey.value = state.settings.apiKey;
    proxyUrl.value = state.settings.proxyUrl;
    thinking.checked = state.showPlan;
  }

  function openSettingsDialog() {
    fillSettingsForm();
    settingsDialog.showModal();
  }

  provider.addEventListener("change", () => {
    if (provider.value === "deepseek") {
      baseUrl.value = "https://api.deepseek.com";
      model.value = "deepseek-chat";
    }
  });

  save.addEventListener("click", () => {
    state.settings = {
      provider: provider.value,
      baseUrl: baseUrl.value.trim() || defaults.baseUrl,
      model: model.value.trim() || defaults.model,
      apiKey: apiKey.value.trim(),
      proxyUrl: proxyUrl.value.trim(),
      thinking: false
    };
    localStorage.setItem(STORE.settings, JSON.stringify(state.settings));
    updateStatus();
  });

  clear.addEventListener("click", () => {
    if (!confirm("清空聊天记录？长期记忆会保留。")) return;
    state.messages = [];
    localStorage.removeItem(STORE.messages);
    render();
    settingsDialog.close();
  });
}

function bindMemoryPanel() {
  const button = document.querySelector("#memoryButton");
  const text = document.querySelector("#memoryText");
  const save = document.querySelector("#saveMemoryButton");
  button.addEventListener("click", () => {
    text.value = state.memory;
    memoryDialog.showModal();
  });
  save.addEventListener("click", () => {
    state.memory = text.value;
    localStorage.setItem(STORE.memory, state.memory);
  });
}

function updateStatus() {
  const hasConnection = state.settings.proxyUrl || state.settings.apiKey;
  statusLine.textContent = hasConnection
    ? `${state.settings.model} · 本地长期记忆`
    : "未配置模型 · 使用本地兜底";
}

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return Array.isArray(fallback) ? [...fallback] : { ...fallback };
    const parsed = JSON.parse(raw);
    if (Array.isArray(fallback)) return Array.isArray(parsed) ? parsed : [...fallback];
    return { ...fallback, ...parsed };
  } catch {
    return Array.isArray(fallback) ? [...fallback] : { ...fallback };
  }
}

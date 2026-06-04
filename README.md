

# 🗺️ Hosts Zabbix — Mapa do Brasil (Grafana Panel)

Painel interativo para visualização de hosts Zabbix em mapa do Brasil, com zoom por estado, grupos de dutos, status em tempo real e topologia de rede.

## 📸 Preview

> Veja o vídeo de demonstração incluso no repositório.

<img width="800" height="400" alt="Demomapasvg" src="https://github.com/user-attachments/assets/d268d257-2936-401c-8909-a5413b1a7a34" />





## 🚀 Funcionalidades

- Mapa SVG interativo do Brasil com todos os estados
- Zoom por estado ao clicar
- Agrupamento por grupos Zabbix (ex: `DUTO-AGUA-01`, `DUTO-AGUA-02`, `DUTO-AGUA-03`)
- Status por host: **OK** / **Warning** / **Problem**
- Topologia de rede em pirâmide por grupo
- Tooltips e painel lateral com detalhes
- Atualização automática via refresh do Grafana

---

## 🗄️ Queries SQL (Zabbix + MySQL)

### Query A — Estado AM (Amazonas)

```sql
-- Query A → Estado AM completo (todos os dutos)
SELECT h.host       AS metric,
       MAX(l.value) AS value,
       'AM'         AS state_sigla,
       g.name       AS group_name
FROM hosts h
JOIN hosts_groups hg ON hg.hostid = h.hostid
JOIN hstgrp       g  ON g.groupid = hg.groupid
JOIN items        i  ON i.hostid  = h.hostid
JOIN history_uint l  ON l.itemid  = i.itemid
WHERE g.name      IN ('DUTO-AGUA-01','DUTO-AGUA-02','DUTO-AGUA-03')
  AND i.key_      = 'icmpping'
  AND h.status    = 0
  AND i.status    = 0
  AND l.clock    >= UNIX_TIMESTAMP(NOW() - INTERVAL 5 MINUTE)
GROUP BY h.host, g.name
```

### Query B — Estado PE (Pernambuco)

```sql
-- Query B → Estado PE completo (todos os dutos)
SELECT h.host       AS metric,
       MAX(l.value) AS value,
       'PE'         AS state_sigla,
       g.name       AS group_name
FROM hosts h
JOIN hosts_groups hg ON hg.hostid = h.hostid
JOIN hstgrp       g  ON g.groupid = hg.groupid
JOIN items        i  ON i.hostid  = h.hostid
JOIN history_uint l  ON l.itemid  = i.itemid
WHERE g.name      IN ('DUTO-AGUA-01','DUTO-AGUA-02','DUTO-AGUA-03')
  AND i.key_      = 'icmpping'
  AND h.status    = 0
  AND i.status    = 0
  AND l.clock    >= UNIX_TIMESTAMP(NOW() - INTERVAL 5 MINUTE)
GROUP BY h.host, g.name
```

> **Nota:** A única diferença entre as queries é o valor de `state_sigla` (`'AM'` vs `'PE'`).  
> Para adicionar novos estados, duplique a query e altere a sigla conforme o padrão ISO 3166-2:BR.

---

## ⚙️ Como usar no Grafana

1. Crie um painel do tipo **Text** ou use o plugin **HTML Panel**.
2. Cole o conteúdo de `panel.html` no campo HTML.
3. Cole o conteúdo de `style.css` no campo CSS.
4. Cole o conteúdo de `panel.js` no campo JS/Script.
5. Adicione as queries SQL acima como **Data Sources** (MySQL/Zabbix DB).
6. Configure o intervalo de refresh desejado (recomendado: 1–5 min).

---

## 📁 Estrutura do Projeto

```
zabbix-brasil-map/
├── README.md       ← Este arquivo
├── panel.html      ← Estrutura HTML do painel
├── style.css       ← Estilos (dark theme GitHub-inspired)
└── panel.js        ← Lógica interativa (SVG, zoom, tooltip, topologia)
```

---

## 🛠️ Tecnologias

- **Grafana** (HTML Panel / Text Panel com modo HTML)
- **Zabbix** via banco MySQL direto
- **SVG** puro para mapa e topologia
- **JavaScript** vanilla (sem dependências externas)

---

## 📌 Grupos suportados

Os grupos Zabbix utilizados atualmente:

| Grupo          | Descrição               |
|----------------|-------------------------|
| `DUTO-AGUA-01` | Duto de água — linha 01 |
| `DUTO-AGUA-02` | Duto de água — linha 02 |
| `DUTO-AGUA-03` | Duto de água — linha 03 |

Para adicionar novos grupos, inclua-os no `WHERE g.name IN (...)` das queries e eles aparecerão automaticamente no mapa.

---

## 📄 Licença

MIT — use à vontade.

Coherence Works · Developmental Sensemaking Hub

The two model pages (Conditions over time and DPZ threshold) now sit in a narrower navy frame with teal and purple glow, matching the Coherence Works hub while preserving their light visualization canvases.
The DPZ page now places playback controls directly below the graph and reduces vertical spacing so the animation and controls are easier to use together on a laptop.

This revision makes the relationship among the core lenses easier to see:
3F conditions → temporal dynamics → CREA emergence → 5R resonance signatures → DPZ durability.

The homepage now includes a condition life-cycle illustration and a companion form life-cycle illustration, distinguishes forms from the conditions they support, and names re-entry as part of the model. The 5R names are consistent across the homepage and DPZ page. The Agency, Temporal, and DPZ pages now share direct navigation, and older page links route to the current model pages.

To deploy on Netlify, use the files in this folder as the published site root. The _redirects file preserves the clean /agency, /temporal, and /dpz routes.

The Agency page uses root-absolute /audio/ paths. The audio/ directory now includes all four playable MP3s: before-you-ask-them-to-learn.mp3, learning-what-holds.mp3, learnings-journey.mp3, and we-come-back.mp3. The prior Before You Ask Them to Learn file was a 2-byte text stub; it has been replaced by the playable SongBridge recording. Cover art is in assets/.

The Before You Ask Them to Learn player now opens a SongBridge-style lyrics reader with the complete lyrics, cover art, audio-follow control, adjustable text size, full-screen mode, and a timing recorder. Lyric cues are recorded by tapping lines during playback and saved in the browser; no timing is guessed in advance.

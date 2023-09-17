export const types = ['Hikaye', 'Görev', 'Hata'];
export const priorities = ['Orta', 'En Yüksek', 'Yüksek', 'Düşük', 'En Düşük'];
export const statuses = ['Yapılacak', 'Geliştirme', 'Test', 'Tamamlandı'];

export const initialStatuses = [
	{ title: 'Yapılacaklar', issues: [] },
	{ title: 'Geliştirme', issues: [] },
	{ title: 'Test', issues: [] },
	{ title: 'Tamamlandı', issues: [] }
];

export const initialIssue = {
	title: '',
	description: '',
	type: 0,
	priority: 0,
	status: 0,
	storyPoints: 0,
	sprintId: ''
};

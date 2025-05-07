import { getHealthStatus } from './getHealthStatus';

describe('getHealthStatus', () => {
    it('should return "healthy" when health is above 50', () => {
        const character = { name: '���', health: 90 };
        expect(getHealthStatus(character)).toBe('healthy');
    });

    it('should return "wounded" when health is between 15 and 50', () => {
        const character = { name: '����', health: 30 };
        expect(getHealthStatus(character)).toBe('wounded');
    });

    it('should return "critical" when health is below 15', () => {
        const character = { name: '���������', health: 10 };
        expect(getHealthStatus(character)).toBe('critical');
    });

    it('should return "wounded" when health is exactly 50', () => {
        const character = { name: '������', health: 50 };
        expect(getHealthStatus(character)).toBe('wounded');
    });

    it('should return "wounded" when health is exactly 15', () => {
        const character = { name: '�������', health: 15 };
        expect(getHealthStatus(character)).toBe('wounded');
    });

    it('should return "critical" when health is exactly 0', () => {
        const character = { name: '���������', health: 0 };
        expect(getHealthStatus(character)).toBe('critical');
    });
});